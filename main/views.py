from django.shortcuts import render
from main.forms import reservationform
# Create your views here.
def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def services(request):
    return render(request, 'services.html')

def about(request):
    return render(request, 'about.html')

def bcontrol(request):
    return render(request, 'bcontrol.html')

def booking(request):
    if request.method == 'POST':
        form = reservationform(request.POST)
        if form.is_valid():
            form.save()
        else:
            print('not valid')
    else:
        form = reservationform(request.POST)
    return render(request, 'booking.html', {'form': form})