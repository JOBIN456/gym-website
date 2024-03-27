from django.shortcuts import render

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

        print(email_info)
    return render(request,"contact.html")
def trainers(request):
    return render(request,"trainers.html")
