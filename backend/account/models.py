from django.db import models
from app.utils import get_balances


class Category(models.Model):
    ledger = models.ForeignKey(
        'ledger.Ledger',
        on_delete=models.PROTECT,
        related_name='categories'
    )
    name = models.CharField(max_length=255)
    sort = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'categories'
        unique_together = ('ledger', 'name')
        ordering = ('sort', 'id')

    def __str__(self):
        return self.name


class Account(models.Model):
    category = models.ForeignKey(
        'account.Category',
        on_delete=models.PROTECT,
        related_name='accounts'
    )
    name = models.CharField(max_length=255)
    sort = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        unique_together = ('category', 'name')
        ordering = ('sort', 'id')

    def __str__(self):
        return self.name

    def get_balances(self):
        entries = self.entries.all()
        return get_balances(entries, convert=False)
