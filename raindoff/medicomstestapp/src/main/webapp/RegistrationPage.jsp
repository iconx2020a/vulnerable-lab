<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="ISO-8859-1">
        <title>Register User</title>
    </head>
    <body>
        <h1>Register Here</h1>
        <form action="adduser.do" method="post">
            <table>
                <tr> 
                    <td> Your ID</td>
                    <td> <input type="text" name="ID"/></td>

                </tr>

                <tr> 
                    <td> First Name</td>
                    <td> <input type="text" name="fname"/></td>
                </tr>
                <tr> 
                    <td> Last Name</td>
                    <td> <input type="text" name="lname"/></td>
                </tr>
                   <tr>
                    <td> Role or Title</td>
                    <td> <input type="text" name="role"/></td>
                </tr>
                 <tr> 
                    <td> Password</td>
                    <td> <input type="password" name="password"/></td>
                </tr>

                <tr> 
                    <td><input type="submit" /> </td>
                    <td> <input type="reset" /> </td>
                    <td> <a href="HomePage.jsp"> Home</a></td>
                </tr>
            </table>
        </form>
    </body>
</html>
