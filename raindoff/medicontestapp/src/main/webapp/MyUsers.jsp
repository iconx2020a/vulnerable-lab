
<%@ page contentType="text/html;charset=UTF-8" language="java" %> 
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<html>
    <head>
        <meta charset="ISO-8859-1">
        <title> User's  Page</title>
    </head>
      <body style="background-color:green;">
    
    <div align="center">
        <table border="1" cellpadding="5">
            <caption><h2>Users</h2></caption>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                 <th>Last Name</th>
                 <th>Role</th>
            </tr>
            <c:forEach var="user" items="${requestScope.users}">
                <tr>
                     <td><c:out value="${user.ID}" /></td>
                    <td><c:out value="${user.firstName}" /></td>
                    <td><c:out value="${user.lastName}" /></td>
                    <td><c:out value="${user.role}" /></td>
                </tr>
            </c:forEach>
      
        </table>
    </div>
<div align="center">
      <table>  
  <td> <a href="HomePage.jsp"> Home</a></td>
  </table>
</div>

    </body>
</html>
