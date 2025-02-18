package com.medicoms;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
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
import java.util.Date;

@WebServlet(name="SearchController", urlPatterns = {"/finduser.do", "/adduser.do", "/isadmin.do", "/resetpassword.do"})
public class SearchController extends HttpServlet {
  private static final long serialVersionUID = 1L;
    private Database db;
    private UsersBean ub;
    ResultSet rs;
    int userID;
    String firstName;
    String lastName;
    String password, searchQuery;
    String userAction;
 
   public void init() throws ServletException {
        // Initialization database...
        db = new Database();
    }

    protected void doPost(HttpServletRequest request,  HttpServletResponse
    response) throws ServletException, IOException {
     ServletContext context = getServletContext( );  
      try{   
               searchQuery = request.getParameter("ID");  
                userID = Integer.parseInt(request.getParameter(searchQuery));
               }catch(NumberFormatException e){
                 // request.getRequestDispatcher("/IDFailure.jsp").forward(request, response);
               // context.log("ID Error Status:500");
       }

context.log("Method:"+request.getMethod());
context.log("src_ip:"+request.getRemoteAddr());
context.log("URL:"+request.getRequestURL().toString());

if(request.getRemoteUser() == null)
  context.log("User-Agant:"+ "unauthenticated user");
else
context.log("User-Agant:"+ request.getRemoteUser());

firstName = request.getParameter("fname");
lastName = request.getParameter("lname");
password = request.getParameter("lpassword");
/*
context.log("password:"+password);
context.log("ID:"+searchQuery);
context.log("firstname:"+firstName);
context.log("lastname:"+lastName);
*/

userAction = request.getServletPath()
        != null ? request.getServletPath() : "";
if (userAction.equals("/isadmin.do") && userID > 0 && password 
        != null && db.isAdmin(userID, password)) {
          context.log("is:isadmin");
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
         context.log("Status:200");

}catch (SQLException err) {
  System.err.println("SQL Error");
  err.printStackTrace(System.err);
  }
}
//request.getRequestDispatcher("/IDFailure.jsp").forward(request, response);

 if (userAction.equals("/finduser.do") && userID > 0 &&
        db.doesUserExist(userID)) {
         request.getRequestDispatcher("/Success.jsp").forward(request, response);
         context.log("SearchQuery:"+searchQuery);
         context.log("Status:200");
} else if (userAction.equals("/adduser.do") && userID > 0 &&
        firstName != null && lastName != null  &&
        db.addUser(userID, firstName, lastName, password)) {
 request.getRequestDispatcher("/Info.jsp").forward(request, response);
context.log("Status:200");
}  else if (userAction.equals("/resetpassword.do") && userID > 0 &&
        firstName != null && lastName != null && password !=null && 
         db.resetPassword(userID, password)){
         request.getRequestDispatcher("/Info.jsp").forward(request, response);
         context.log("Status:200");
}
 else {

/*
     catch (SQLException err) {
  System.err.println("SQL Error");
  err.printStackTrace(System.err);
  }
*/
   request.getRequestDispatcher("/SQLFailure.jsp").forward(request, response);
         context.log("here SQL ERROR Status:500");

}

}   

}
