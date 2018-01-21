import graphene
from graphene_django.types import DjangoObjectType
from . import models


class CommodityNode(DjangoObjectType):
    class Meta:
        model = models.Commodity
        interfaces = (graphene.relay.Node, )


class PriceNode(DjangoObjectType):
    class Meta:
        model = models.Price
        interfaces = (graphene.relay.Node, )


class Query(object):
    pass
