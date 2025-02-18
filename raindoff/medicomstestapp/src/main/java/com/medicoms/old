package com.medicoms;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name="SearchController", urlPatterns = {"/finduser.do", "/adduser.do", "/isadmin.do"})

public class SearchController extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private Database db;
    public void init() throws ServletException {
        // Initialization database...
        db = new Database();
    }

protected void doPost(HttpServletRequest request,  HttpServletResponse
            response) throws ServletException, IOException {
      
        int userID = Integer.parseInt(request.getParameter("ID"));
        String firstName = request.getParameter("fname");
        String lastName = request.getParameter("lname");
        String password = request.getParameter("password");
        String userAction = request.getServletPath()
                != null ? request.getServletPath() : "";
        if (userAction.equals("/isadmin.do") && userID > 0 && password 
                != null && db.isAdmin(userID, password)) {
request.getRequestDispatcher("/ShowUsers.jsp").forward(request, response);
        } else if (userAction.equals("/finduser.do") && userID > 0 &&
                db.doesUserExist(userID)) {
request.getRequestDispatcher("/Success.jsp").forward(request, response);
        } else if (userAction.equals("/adduser.do") && userID > 0 &&
                firstName != null && lastName != null) {
            db.addUser(userID, firstName, lastName);         
            request.getRequestDispatcher("/Info.jsp").forward(request, response);
        } else {   request.getRequestDispatcher("/Failure.jsp").forward(request, response);
        }

    }

}
