import graphene
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphql_relay.node.node import from_global_id
from . import models


class TransactionNode(DjangoObjectType):
    class Meta:
        model = models.Transaction
        filter_fields = {
            'payee': ['exact'],
            'date': ['exact', 'lt', 'lte', 'gt', 'gte']
        }
        interfaces = (graphene.relay.Node, )


class EntryNode(DjangoObjectType):
    class Meta:
        model = models.Entry
        filter_fields = ['account', 'is_cleared']
        interfaces = (graphene.relay.Node, )


class Query(object):
    transaction_list = DjangoFilterConnectionField(
        TransactionNode,
        ledger=graphene.String(required=True)
    )

    def resolve_transaction_list(self, info, **kwargs):
        ledger = from_global_id(kwargs.get('ledger'))
        ledger_id = int(ledger[1])
        return models.Transaction.objects.filter(
            ledger_id=ledger_id,
            ledger__creator=info.context.user
        )
