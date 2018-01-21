import graphene
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from . import models


class LedgerNode(DjangoObjectType):
    class Meta:
        model = models.Ledger
        filter_fields = ['is_active']
        interfaces = (graphene.relay.Node, )


class Query(object):
    ledger_list = DjangoFilterConnectionField(LedgerNode)

    def resolve_ledger_list(self, info):
        return models.Ledger.objects.filter(creator=info.context.user)
