# COMP426-Project
[proj-name] is a tournament creation and management platform, which uses Riot Games API to pull League of Legends user info and parse for optimizing team and bracket seeding/creation. [proj-name] primarily uses [blank] framework for front-end and [blank] for back-end.

## Recommended
* [Pycharm](https://www.jetbrains.com/pycharm/) works great with this and has [built in support](https://www.jetbrains.com/help/pycharm/creating-django-project.html) for django.
* [Django Reference](https://docs.djangoproject.com/en/1.11/ref/)

*feel free to add any other sources here that might be useful.*

## Structure
### Front folder
This is the folder that contains the basic contents the front end, this contributes nothing to the actual website that is seen. This is being used a simple way to develope the UI outside of the Django site. Changes that are made here should be merged with the files in the Django.

### Website folder
This is the actual Django server itself. It contains all the pages and logic that will be the website. Django works off the app model. 

The sub-directory *website* is the launching point of the server. This handles base incomming requests and delegates actions to the corresponding [apps](https://www.jetbrains.com/help/pycharm/creating-django-application-in-a-project.html). These contain individual logic and control for each piece. 

You can see that inside the *website* sub-directory we have a file for URLs. Read up on that here: [URL Dispatcher](https://docs.djangoproject.com/en/1.11/topics/http/urls/).

Currently there is only a homepage so this is all we need.
```python
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', index)
]
```
This leads us to the *homepage* folder. This contains its own set of files and importantly
* urls.py (can be created if we need more linkage in this page)
* models (data)
* views (function for generating our html and such)


##### Explore and don't destroy stuff, experiment and watch tutorials. Don't push to the git unless its for the assignment.

## [Editing the README.md](https://dillinger.io/)
