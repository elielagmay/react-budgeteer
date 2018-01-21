from decimal import Decimal
from django.core.exceptions import ValidationError
from django.db import models


class Transaction(models.Model):
    ledger = models.ForeignKey(
        'ledger.Ledger',
        on_delete=models.PROTECT,
        related_name='transactions'
    )
    date = models.DateTimeField()
    payee = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    class Meta:
        get_latest_by = 'date'
        ordering = ('-date', )

    def __str__(self):
        return u'{} - {}{}'.format(
            self.date.strftime('%d %b %Y'),
            self.payee,
            ' - {}'.format(self.description) if self.description else ''
        )

    def clean(self):
        # TODO - ensure transaction entries are balanced
        pass


class Entry(models.Model):
    transaction = models.ForeignKey(
        'transaction.Transaction',
        on_delete=models.CASCADE,
        related_name='entries'
    )
    account = models.ForeignKey(
        'account.Account',
        on_delete=models.PROTECT,
        related_name='entries'
    )
    commodity = models.ForeignKey(
        'commodity.Commodity',
        on_delete=models.PROTECT,
        related_name='entries'
    )
    price = models.ForeignKey(
        'commodity.Price',
        on_delete=models.PROTECT,
        related_name='entries',
        null=True,
        blank=True
    )
    amount = models.DecimalField(max_digits=32, decimal_places=8)
    description = models.TextField(blank=True)
    is_cleared = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'entries'

    def __str__(self):
        return u'Entry ID:{}'.format(self.id)

    def clean(self):
        errors = {}
        ledger = self.transaction.ledger

        if ledger != self.account.category.ledger:
            errors['account'] = 'Selected account is invalid'

        if ledger != self.commodity.ledger:
            errors['commodity'] = 'Selected commodity is invalid'

        if self.price is not None and ledger != self.price.primary.ledger:
            errors['price'] = 'Selected price is invalid'

        if errors:
            raise ValidationError(errors)

    def get_amount_tuple(self, convert=False):
        amount = Decimal(str(self.amount))
        commodity = self.commodity

        if not amount.is_finite():
            raise ValueError('amount is not a finite number')

        if convert and self.price is not None:
            commodity = self.price.secondary
            amount *= self.price.amount

        return (commodity.get_quantized_amount(amount), commodity)
