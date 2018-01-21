import graphene
from graphene_django.types import DjangoObjectType
from . import models


class CategoryNode(DjangoObjectType):
    class Meta:
        model = models.Category
        interfaces = (graphene.relay.Node, )


class AccountNode(DjangoObjectType):
    class Meta:
        model = models.Account
        interfaces = (graphene.relay.Node, )


class Query(object):
    pass
