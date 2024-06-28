# Gradebook Project

Create a gradebook page for a list of students that implements the following requirements:

1. **HTML Page Setup:**
    - Create an HTML page that includes references to two external files: `style.css` and `script.js`.
    - Add a `div` with the id `"lista_elevi_wrapper"` that contains three sections:
        - A title: "Lista elevi"
        - A form to add students:
            - The form contains a text input for the name and an add button.
            - Adding a new student can be done by clicking the add button or pressing the Enter key on the keyboard.
        - A table displaying the added students using the form:
            - The table has three columns: name, average grade, and a "See grades" button.
            - Add two buttons to sort students by average grade: ascending and descending.

2. **"See Grades" Button Implementation:**
    - Implement the "See grades" button so that when clicked, a new `div` (requirement 3) appears on the screen.

3. **Grades Section:**
    - Add a new `div` with the id `"note_elev_wrapper"` inside the HTML page, containing four sections:
        - A "Hide grades" button that, when clicked, hides the `"note_elev_wrapper"` `div`.
        - A section displaying the name of the selected student.
        - A form to add new grades to the selected student:
            - The form contains a number input and an add button.
            - Adding a grade to the selected student can be done by clicking the add button or pressing the Enter key on the keyboard.
        - A table displaying the grades of the selected student:
            - The table has a single column: grade.
            - Add two buttons to sort the displayed grades: ascending and descending.

