from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import Item

# Create your views here.
def index(request):
    return render(request, 'index.html')

def login(request):
    if request.method=='POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Invalid login credentials.')
            return redirect('login')
    else:
        return render(request, 'login.html')
    
def logout(request):
    auth.logout(request)
    return redirect('/')

def register(request):
    if request.method=='POST':
        username = request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        password = request.POST['password']
        password_r = request.POST['password_r']
        if password==password_r:
            if User.objects.filter(email=email).exists():
                messages.info(request, 'Email already registered.')
                return redirect('register')
            else:
                user = User.objects.create_user(
                    username=username,
                    first_name=fname,
                    last_name=lname,
                    email=email,
                    password=password
                )
                messages.success(request, 'Account created successfully')
                return redirect('login')
        else:
            messages.info(request, 'Passwords do not match.')
            return redirect('register')
    else:
        return render(request, 'register.html')
    
def wardrobe(request):
    items = Item.objects.all()
    return render(request, 'wardrobe.html', {'items': items})