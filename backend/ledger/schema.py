import graphene
from graphql_relay.node.node import from_global_id
from graphene_django.types import DjangoObjectType
from . import models


class LedgerNode(DjangoObjectType):
    class Meta:
        model = models.Ledger
        filter_fields = ('is_active', )
        interfaces = (graphene.relay.Node, )


class Query(object):
    ledger = graphene.Field(LedgerNode, ledger_id=graphene.ID(required=True))

    def resolve_ledger(self, info, ledger_id):
        try:
            user = info.context.user
            node, pk = from_global_id(ledger_id)
            assert node == 'LedgerNode'
            assert user.is_authenticated
            ledger = models.Ledger.objects.get(pk=pk, creator=user)
        except Exception:
            return None
        else:
            return ledger
