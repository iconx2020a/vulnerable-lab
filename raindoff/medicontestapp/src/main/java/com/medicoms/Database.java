package com.medicoms;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.sql.SQLException;

public class Database {
    private PreparedStatement ps;
    private ResultSet rs;
    private static Connection conn;
public Database (){
    conn = getMySqlConnection();
}

private Connection getMySqlConnection(){
try{
  Context context = new InitialContext();
  Context envContext = (Context) context.lookup("java:/comp/env");
  DataSource dataSource = (DataSource) envContext.lookup("jdbc/testdb");
   return  dataSource.getConnection();
    }catch (NamingException e){
     System.out.println(e.toString());
    }catch (SQLException ex){
     System.out.println(ex.toString());
//        ex.printStackTrace(System.ex);
    }
    return null;
    }

  public boolean addUser(int id, String fName, String lName, String role, String pet, String password)  {
        String sql = "insert into Person values(?,?,?,?,?,?)";
        try {
            ps = conn.prepareStatement(sql);
           ps.setInt(1, id);
            ps.setString(2, fName);
            ps.setString(3, lName);
           ps.setString(4, role);
            ps.setString(5, pet);
           ps.setString(6, password);
            ps.executeUpdate();
         return  true;
        } catch (SQLException e) {
            
            System.out.println("SQL execution    failure");
        }
        return false;
    }

      public boolean addEmail(int id, String email, String title)  {
       // if(conn == null)
        //return false;
        String sql = "insert into Email values(?,?,?)";
        try {
            ps = conn.prepareStatement(sql);
           ps.setInt(1, id);
            ps.setString(2, email);
            ps.setString(3, title);
            ps.executeUpdate();
           return true;
        } catch (SQLException e) {
            
            System.out.println("SQL execution    failure");
        }
        return false;
    }

    public boolean doesUserExist(int id)  {
        String sql = "select * from Person where ID=?";
        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, id);
            rs = ps.executeQuery();
            return rs.next();
        } catch (SQLException e) {
            System.out.println("SQL execution failure");
        }
        return false;
    }
   public boolean doesUserExist(int id, String role, String pet)  {
        String sql = "select * from Person where ID=? and role=? and pet=?";
        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, id);
             ps.setString(2, role);
              ps.setString(3, pet);
            rs = ps.executeQuery();
            return rs.next();
        } catch (SQLException e) {
            System.out.println("SQL execution failure");
        }
        return false;
    }

    public void  resetPassword(int id, String password) throws SQLException {

        String query = "update Person set password=? where ID=? ";
         ps = conn.prepareStatement(query);
         ps.setString(1, password);
         ps.setInt(2, id);
         ps.executeUpdate();
         System.out.println("Record is updated successfully......");
    }

    public boolean isAdmin(int id, String password) {
        String sql = "select * from Admin where ID=? and Password=?";
        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, id);
            ps.setString(2, password);
            rs = ps.executeQuery();
            return rs.next();
        } catch (SQLException e) {
            System.out.println("SQL execution failure");
        }
        return false;
    }

public ResultSet getEmails() {
        String sql = "select * from Email";
        try {
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            return rs;
        } catch (SQLException e) {
            System.out.println(e.toString());
        }
        return null;
    }


public ResultSet getAllUsers() {
    
        String sql = "select ID, firstName, lastName, role  from Person";
        try {
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            return rs;
        } catch (SQLException e) {
            System.out.println(e.toString());
        }
        return null;
    }
}
