from django.db import models

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=200)  # Blog title
    slug = models.SlugField(unique=True)  # URL-friendly identifier
    description = models.TextField(blank=True)  # Blog description
    thumbnail = models.ImageField(upload_to='thumbnails/', blank=True, null=True)  # Optional image
    document = models.FileField(upload_to='documents/')  # .doc/.docx file upload
    created_at = models.DateTimeField(auto_now_add=True)  # Auto set on creation
    updated_at = models.DateTimeField(auto_now=True)      # Auto update on save

    def __str__(self):
        return self.title