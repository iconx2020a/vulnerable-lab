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

  public boolean addUser(int id, String fName, String lName, String password)  {
       // if(conn == null)
        //return false;
        String sql = "insert into Person values(?,?,?,?)";
        try {
            ps = conn.prepareStatement(sql);
           ps.setInt(1, id);
            ps.setString(2, fName);
            ps.setString(3, lName);
           ps.setString(4, password);
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("SQL execution    failure");
        }
        return true;
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

    public void  resetPassword(int id, String password) throws SQLException {

        String query = "update Person set password=? where ID=? ";
         ps = conn.prepareStatement(query);
         ps.setString(1, password);
         ps.setInt(2, id);
         ps.executeUpdate();
         System.out.println("Record is updated successfully......");
        

        /*
           String sql ="UPDATE Person SET password = ?,  WHERE ID = ?";
          //update Person set password='GM66' where ID=909090;         
//PreparedStatement st = db.con.prepareStatement("UPDATE item SET Name = ?, Size = ?, Price = ?, WHERE ItemCode = ?");
       try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, id);
            ps.setString(4, lPassword);
            ps.executeUpdate();
            return true;
        } catch (SQLException e) {
            System.out.println("SQL execution failure");
        }
*/
 
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
/*
    public ResultSet allUsers() {
        String sql = "select * from Person";
        try {
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            return rs;
        } catch (SQLException e) {
            System.out.println(e.toString());
        }
        return null;
    }
*/
public ResultSet getAllUsers() {
    
        String sql = "select ID, firstName, lastName  from Person";
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
