from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.base_user import BaseUserManager


# Create your models here.

class AppUserManager(BaseUserManager):
  def create_user(self, email, password=None):
    if not email:
      raise ValueError('An email is required.')
    if not password:
      raise ValueError('A password is required.')
    email = self.normalize_email(email)
    user = self.model(email = email)
    user.set_password(password)
    user.save()
    return user
  def create_superuser(self, email, password =None):
    if not email:
      raise ValueError('An email is required.')
    if not password:
      raise ValueError('A password is required.')
    user = self.create_user(email, password)
    user.is_superuser = True
    user.save()
    return user

class StdUser():
  primaryEmail = models.TextField(max_length=254, blank=False)
  
  class Meta:
    abstract = True
  
  def save(self, *args, **kwargs):
    if not self.password:
      raise ValidationError("Password missing")
    super().save(*args, **kwargs)
    
  def set_password(self, raw_password):
    super().set_password(raw_password)    