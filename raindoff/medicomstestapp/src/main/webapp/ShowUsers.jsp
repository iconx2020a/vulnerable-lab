

<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/sql" prefix = "sql"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    
<%@ page import="com.medicoms.Environment"%>
   
<jsp:useBean id="env" class = "com.medicoms.Environment" scope="request"/>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<sql:setDataSource
  var="myDS"
  driver="com.mysql.cj.jdbc.Driver"
  url=<%=localhost>
  user = <%="root">
  password = <%="root">
/>
    <sql:query dataSource = "${myDS}" var = "listUsers">
            select ID, firstName, lastName from Person;
      </sql:query

<title>Users List</title>
</head>
  <body style="background-color:green;">
    <div align="center">
        <table border="1" cellpadding="5">
            <caption><h2>Users</h2></caption>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                 <th>Last Name</th>
            </tr>
            <c:forEach var="user" items="${listUsers.rows}">
                <tr>
                     <td><c:out value="${user.ID}" /></td>
                    <td><c:out value="${user.lastName}" /></td>
                    <td><c:out value="${user.firstName}" /></td>
                </tr>
            </c:forEach>
        </table>
    </div>
</body>
</html>
