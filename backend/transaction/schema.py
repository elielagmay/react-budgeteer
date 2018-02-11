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
        ledger_id=graphene.ID(required=True)
    )

    def resolve_transaction_list(self, info, **kwargs):
        node, ledger_id = from_global_id(kwargs.get('ledger_id'))
        assert node == 'LedgerNode'
        return models.Transaction.objects.filter(
            ledger_id=ledger_id,
            ledger__creator=info.context.user
        ).order_by('-date', 'id')
