import graphene
from django.contrib.auth import models
from graphene_django.types import DjangoObjectType


class UserNode(DjangoObjectType):
    class Meta:
        model = models.User
        filter_fields = ('is_active', )
        exclude_fields = ('password', )
        interfaces = (graphene.relay.Node, )


class Query(object):
    user = graphene.Field(UserNode)

    def resolve_user(self, info):
        return info.context.user
