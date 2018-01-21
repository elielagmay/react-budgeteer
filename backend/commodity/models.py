from decimal import Decimal
from django.core.exceptions import ValidationError
from django.db import models


class Commodity(models.Model):
    ledger = models.ForeignKey(
        'ledger.Ledger',
        on_delete=models.PROTECT,
        related_name='commodities'
    )
    name = models.CharField(max_length=255)
    sort = models.IntegerField(default=0)
    decimal_places = models.IntegerField(default=2)

    class Meta:
        unique_together = ('ledger', 'name')
        verbose_name_plural = 'commodities'
        ordering = ('sort', )

    def __str__(self):
        return self.name

    def get_quantized_amount(self, amount):
        exponent = Decimal(10) ** -self.decimal_places
        return amount.quantize(exponent)


class Price(models.Model):
    primary = models.ForeignKey(
        'commodity.Commodity',
        on_delete=models.PROTECT,
        related_name='primary_prices'
    )
    secondary = models.ForeignKey(
        'commodity.Commodity',
        on_delete=models.PROTECT,
        related_name='secondary_prices'
    )
    amount = models.DecimalField(max_digits=32, decimal_places=8)
    date = models.DateField()

    class Meta:
        get_latest_by = 'date'
        unique_together = ('primary', 'secondary', 'date')
        ordering = ('-date', )

    def __str__(self):
        return u'{} (1 {} = {:,} {})'.format(
            self.date.strftime('%Y-%m-%d'),
            self.primary,
            self.get_quantized_amount(),
            self.secondary
        )

    def get_quantized_amount(self):
        return self.secondary.get_quantized_amount(self.amount)

    def clean(self):
        if self.primary.ledger != self.secondary.ledger:
            raise ValidationError({
                'secondary': 'Selected commodity is invalid'
            })
