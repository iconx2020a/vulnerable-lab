<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="ISO-8859-1">
        <title>Password Reset</title>
    </head>
      <body style="background-color:green;">
        <h1>Reset password</h1>
        <form action="resetpassword.do" method="post">
            <table>
                <tr> 
                    <td> Your ID</td>
                    <td> <input type="text" name="ID"/></td>

                </tr>

                <tr> 
                    <td> Mother's Name</td>
                    <td> <input type="text"  name="fname"/></td>
                </tr>
                <tr> 
                    <td> Pet's name</td>
                    <td> <input type="text" name="lname"/></td>
                </tr>
                  <tr> 
                    <td> New Password</td>
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
