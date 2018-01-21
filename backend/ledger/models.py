from django.db import models


class Ledger(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(
        'auth.User',
        on_delete=models.PROTECT,
        related_name='ledgers'
    )
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    class Meta:
        unique_together = ('creator', 'name')

    def __str__(self):
        return self.name
