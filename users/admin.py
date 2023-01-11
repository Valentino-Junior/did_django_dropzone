from django.contrib import admin
from . models import UserProfile, UserToken, UserImage


# DOCS - https://docs.djangoproject.com/en/3.1/ref/contrib/admin/

class UserProfileAdmin(admin.ModelAdmin):
	
	list_display = ('id', 'user', 'timestamp')

admin.site.register(UserProfile,UserProfileAdmin)


class UserTokenAdmin(admin.ModelAdmin):
	
	list_display = ('id', 'user', 'timestamp')

admin.site.register(UserToken,UserTokenAdmin)


class UserImageAdmin(admin.ModelAdmin):
	
	list_display = ('id', 'user', 'image', 'instructions', 'timestamp',)

admin.site.register(UserImage,UserImageAdmin)


