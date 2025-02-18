<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>

<html>
    <head>
        <meta charset="ISO-8859-1">
        <title>Medicoms APP Admin Page</title>
    </head>
    <body>
        <form action="isadmin.do" method="post">
            <table>
                <tr> 
                    <td> Your ID</td>
                    <td> <input type="text" name="ID"/> </td>
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
