<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="ISO-8859-1">
        <title>Search page</title>
    </head>
    <body>
        <form action="finduser.do" method="post">
            <table>
                <tr> 
                    <td>Search for an  ID or anything</td>
                    <td> <input type="text" name="ID"/></td>

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
