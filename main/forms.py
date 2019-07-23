from django import forms
from .models import reservation

HRS_CHOICES = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']

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
