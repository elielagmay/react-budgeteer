from django.conf import settings
from graphene import ObjectType, Field, Schema
from graphene_django.debug import DjangoDebug
import account.schema
import commodity.schema
import ledger.schema
import transaction.schema
import user.schema


class RootQuery(
    account.schema.Query,
    commodity.schema.Query,
    ledger.schema.Query,
    transaction.schema.Query,
    user.schema.Query,
    ObjectType
):
    pass


class RootQueryWithDebug(RootQuery):
    debug = Field(DjangoDebug, name='__debug')


schema = Schema(query=RootQuery)

if settings.DEBUG:
    schema = Schema(query=RootQueryWithDebug)
