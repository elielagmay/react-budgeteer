import os
from django.core.exceptions import ImproperlyConfigured


def get_env_variable(var_name, default_value=None):
    # Get the environment variable or return exception
    try:
        var = os.environ[var_name]
    except KeyError:
        if default_value is None:
            error_msg = 'Set the %s environment variable' % var_name
            raise ImproperlyConfigured(error_msg)
        else:
            return default_value
    return var

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

ROOT_URLCONF = 'app.urls'
WSGI_APPLICATION = 'app.wsgi.application'

SECRET_KEY = get_env_variable(
    'DJANGO_SECRET_KEY',
    'ovfo3es*ad64tj8u_!2*)7b+k&5zwwbo^jrifu(e7d^!!uimlk'
)

DEBUG = True

ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'corsheaders',
    'django_filters',
    'graphene_django',

    'account',
    'commodity',
    'ledger',
    'transaction',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates')
        ],
        'APP_DIRS': DEBUG,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': get_env_variable('DJANGO_PG_HOST', 'database'),
        'PORT': get_env_variable('DJANGO_PG_PORT', 5432),
        'NAME': get_env_variable('DJANGO_PG_NAME', 'app_db'),
        'USER': get_env_variable('DJANGO_PG_USER', 'app_user'),
        'PASSWORD': get_env_variable('DJANGO_PG_PASS', 'app_pass'),
    }
}

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

USE_THOUSAND_SEPARATOR = True
NUMBER_GROUPING = 3

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

WEBPACK_DEV_BUNDLE = 'http://localhost:9000/bundle.js'

GRAPHENE = {
    'SCHEMA': 'app.schema.schema'
}
