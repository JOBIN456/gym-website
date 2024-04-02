from django.shortcuts import render
from django .core .mail import send_mail

# Create your views here.
def home(request):
    return render(request,"home.html")

def about(request):
    return render(request,"about.html")
def facilities(request):
    return render(request,"facilities.html")
def contact(request):
    if request.method == 'POST':
        name=request.POST.get('full-name')
        email=request.POST.get('email')
        message=request.POST.get('message')

        email_info={
            'name':name,
            'email':email,
            'message':message

        }
        messages='''
        New message:{}
        From:{}
       '''.format(email_info['message'],email_info['email'])

        send_mail(name, messages, '', ["jobinj5210@gmail.com"])
    return render(request,"contact.html")
def trainers(request):
    return render(request,"trainers.html")


def plans(request):
    return render(request,"plans.html")
