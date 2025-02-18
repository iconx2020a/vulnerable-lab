package com.medicoms;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.medicoms.UsersBean;
import java.util.ArrayList;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;

@WebServlet(name="SearchController", urlPatterns = {"/resetpassword.do","/finduser.do", "/adduser.do", "/isadmin.do"})


public class SearchController extends HttpServlet {
 private static final long serialVersionUID = 1L;
    private Database db;
     private UsersBean ub;
     ResultSet rs;
    int userID;
    boolean isInt ;
    String firstName;
    String lastName, role;
    String password, searchQuery;
    String userAction;

private void getEmails(ServletContext context) {
    rs = db.getEmails();
   try{
        context.log("Email Table of employees");
         while(rs.next()) {
                 context.log(Integer.toString(rs.getInt("ID")));
                 context.log(rs.getString("email"));
                 context.log(rs.getString("title"));
           }
      }catch (SQLException err) {
           err.printStackTrace(System.err);
            context.log("system error:"+err.toString());
   }

}
   
 
  public void init() throws ServletException {
        // Initialization database...
        db = new Database();
       isInt=true;
    }

    protected void doPost(HttpServletRequest request,  HttpServletResponse
    response) throws ServletException, IOException {
      ServletContext context = getServletContext();
        try{
               isInt=true;
                searchQuery = request.getParameter("ID");
                userID = Integer.parseInt(searchQuery);
               }catch(NumberFormatException e){
              isInt = false;
               }
     firstName = request.getParameter("fname");
     lastName = request.getParameter("lname");
     password = request.getParameter("password");
     role  = request.getParameter("role");
     userAction = request.getServletPath()
        != null ? request.getServletPath() : "";

context.log("Method:"+request.getMethod());
context.log("src_ip:"+request.getRemoteAddr());
context.log("URL:"+request.getRequestURL().toString());
if(request.getRemoteUser() == null)
  context.log("User-Agant:"+ "unauthenticated user");
else
context.log("User-Agant:"+ request.getRemoteUser());

if (userAction.equals("/resetpassword.do") && userID > 0 && password !=null) {
try {
        db.resetPassword(userID, password);
         request.getRequestDispatcher("/ResetInfo.jsp").forward(request, response);
          context.log("Mother\'s Name:"+firstName);          
          context.log("Pet\'s Name:"+lastName);
          context.log("Status:200");
return;
   }catch (SQLException err) {
           err.printStackTrace(System.err);
            context.log("system error:"+err.toString());
     
   }
} else if (userAction.equals("/isadmin.do") && userID > 0 && password 
        != null && db.isAdmin(userID, password)) {
         ArrayList<UsersBean> users = new ArrayList<UsersBean>();               
         rs = db.getAllUsers();
try{
         while(rs.next()){
                ub = new UsersBean();
                ub.setID(rs.getInt("ID"));
                ub.setFirstName(rs.getString("firstName"));
                ub.setLastName(rs.getString("lastName"));
                users.add(ub);
        }
          
         request.setAttribute("users", users);            
         request.getRequestDispatcher("/MyUsers.jsp").forward(request, response);
getEmails(context);          
context.log("Status:200");


}  catch (SQLException err) {
System.err.println("SQL Error");
 err.printStackTrace(System.err);
} finally {
try {
rs.close();
} catch (SQLException e) {

} catch (NullPointerException e){}
}

} else if (userAction.equals("/finduser.do") && userID > 0 &&
        db.doesUserExist(userID)) {
        context.log("SearchQuery:"+searchQuery);
        context.log("Status:200");
        if(isInt)
            request.getRequestDispatcher("/Success.jsp").forward(request, response);
        else
           request.getRequestDispatcher("/Search.jsp").forward(request, response);
} else if (userAction.equals("/adduser.do") && userID > 0 &&
        firstName != null && lastName != null &&  db.addUser(userID, firstName, lastName, password)) {
        db.addEmail(userID, searchQuery+"@acit.com", role);
       context.log("Status:200");
    request.getRequestDispatcher("/Info.jsp").forward(request, response);
} else {  
         request.getRequestDispatcher("/SQLFailure.jsp").forward(request, response);}
        //context.log("SQL Error:500");
}   

}
