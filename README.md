# Setup
Clone the repo & create a new branch

```
npm install
bower install
```

# Development
This command runs a development server which serves the application

```
grunt init
```

------------

# Task
A report is a combination of headings, paragraphs, images & graphs. The task is to let user build a report by letting them drag & drop various components.

- You need not build components that render images/graphs, I've included directives which are proxy for them under `src/app/shared/directives`(componentA & componentB)
- When you load the app, you shall find `<report-builder>` directive being used inside `src/app/report_builder/template.html`. The signature of the directive is defined
- I've also included initializer code for the same directive under `src/app/shared/directives/reportBuilder` folder.
- Modify the code of the directive such that, it let's user drag & drop the following 4 components
    - Component A, dropping this should just render the content of this directive
    - Component B, dropping this should just render the content of this directive
    - Headings, dropping this should let user add a custom heading (Think of it as dropping heading under Powerpoint)
    - Paragraphs, dropping this should let user add a custom paragraph (Same as headings but the difference is that it is a paragraph)
- User shall be able to drag & drop a particular component as many times they want while building the report. For example, a user might add multiple headings to the report
- User shall be able to drop components in between already dropped components
- You have to come up with the UI & write the necessary CSS under `less/app.less`. Since bootstrap is already included, feel free to extend it

**You should:**
- Write code that is easy to comprehend & maintainable
- Write effective comments where needed
- Ensure UI is intuitive
- Code as if it's going to be used for production

**You may:**
- Utilize the libraries that I've included under `index.html`. I've specifically included `angular-ui-sortable` so that you need not worry about the implementation of drag & drop

**BONUS:**
- The primary purpose of this task is to implement report builder. Implementing `data-ng-model` binding is a BONUS.

Have fun!
