from django import forms
from .models import reservation

class reservationform(forms.ModelForm):
    first_name = forms.CharField(max_length=30)
    last_name = forms.CharField(max_length=30)
    year = forms.IntegerField()
    month = forms.IntegerField()
    day = forms.IntegerField()
    hour_start = forms.IntegerField()
    hour_end = forms.IntegerField()
    city = forms.CharField(max_length=60)
    message = forms.CharField(widget=forms.Textarea)

    class Meta:
        model = reservation
        fields = ('first_name', 'last_name', 'year', 'month', 'day', 'hour_start', 'hour_end', 'city', 'message')
