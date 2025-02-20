<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%
    response.setHeader("Cache-Control", "private, no-store,"
            + " no-cache, must-revalidate");
    response.setHeader("Pragma", "no-cache");
    response.setDateHeader("Expire", 0);
%>
<html>
    <head>
        <meta charset="ISO-8859-1">
        <title>Welcome to Medicoms Test App</title>
    </head>
    <body>
        <h1>Menu</h1>
        <table>
            <tr> 
                <td><a href="RegistrationPage.jsp"> Register Yourself</a></td>

            </tr>
            <tr> 
                <td> <a href="MySearchPage.jsp"> Search </a></td>
            </tr>
            <tr> 
                <td><a href="AdminPage.jsp"> System Administrator</a></td>
            </tr>
            <tr>
                <td><a href="PasswordReset.jsp">Reset Password</a></td>
            </tr>
           
        </table>
    </body>
</html>
