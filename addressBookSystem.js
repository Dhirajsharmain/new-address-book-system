/**
 * ****************************************************************************
 * Purpose: The purpose of this program to address book system.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 13-07-2021
 * ****************************************************************************
 */

class Contact{

        #id;
        #firstName;
        #lastName;
        #address;
        #city;
        #state;
        #zip;
        #phone;
        #email;
    
        constructor (...params){
            this.#id = params[0];
            this.#firstName = params[1];
            this.#lastName = params[2];
            this.#address = params[3];
            this.#city = params[4];
            this.#state = params[5];
            this.#zip = params[6];
            this.#phone = params[7];
            this.#email = params[8];
        }
    
        get id() {
            return this.#id;
        }
    
        set id(id) {
            this.#id = id;
        }
    
        set firstName(firstName) {
            this.#firstName = firstName;
        }
    
        get firstName() {
            return this.#firstName;
        }
    
        set lastName(lastName) {
            this.#lastName = lastName;
        }
    
        get lastName() {
            return this.#lastName;
        }
    
        set address(address) {
            this.#address = address;
    
        }
    
        get address() {
            return this.#address;
        }
    
        set city(city) {
            this.#city = city;
        }
    
        get city() {
            return this.#city;
        }
    
        set state(state) {
            this.#state = state;
        }
    
        get state() {
            return this.#state;
        }
    
        set zip(zip) {
            this.#zip = zip;
    
        }
    
        get zip() {
            return this.#zip;
        }
    
        set phone(phone) {
            this.#phone = phone;
        }
    
        get phone() {
            return this.#phone;
        }
    
        set email(email) {
            this.#email = email;
        }
    
        get email() {
            return this.#email;
        }
    
    
        toString() {
            return "id=" + this.#id + ",firstName=" + this.#firstName + ",lastName=" + this.#lastName + ",address=" 
            + this.#address + ",city=" + this.#city + ",state=" + this.#state + ",phoneNumber=" + this.#phone + ",zip=" 
            + this.#zip + ",email=" + this.#email;
        }
    
    }

let addressBookArr = new Array();
let contect = new Contact("1", "Dhiraj", "Sharma", "101", "Hisar", "Haryana", "135555", "735598", "dhirajsharma@gmail.com");

addressBookArr.push(contect);

console.log(addressBookArr);