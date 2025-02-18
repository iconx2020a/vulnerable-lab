package com.medicoms;

public class UsersBean {
    private int ID;
    private String firstName;
    private String lastName;
  
    public int getID() {
        return ID;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
     public void setID(int ID) {
         this.ID=ID;
    }
    public void setFirstName(String firstName) {
        this.firstName=firstName;
    }
    public void setLastName(String lastName) {
        this.lastName=lastName;
    }
}
