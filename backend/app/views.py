import json
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView


def index(request, id=None):
    context = {}

    if settings.DEBUG:
        context['WEBPACK_DEV_BUNDLE'] = settings.WEBPACK_DEV_BUNDLE

    else:
        import boto3
        s3 = boto3.resource('s3')
        key = '{}/assets.json'.format(settings.AWS_LOCATION)
        bucket = settings.AWS_STORAGE_BUCKET_NAME
        obj = s3.Object(bucket, key)
        assets = {}

        try:
            body = obj.get()['Body']
            assets = json.load(body)['main']
        except Exception as e:  # pragma: no cover
            print('Failed to read {} from bucket {}.'.format(key, bucket))
            print('ERROR {}'.format(e))

        context['WEBPACK_CSS_BUNDLE'] = assets.get('css')
        context['WEBPACK_JS_BUNDLE'] = assets.get('js')

    return render(request, 'index.html', context)


def health_check(request):
    return HttpResponse('OK')


graphql = login_required(GraphQLView.as_view(graphiql=True))
