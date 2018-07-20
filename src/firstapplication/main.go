package main

import (
	"encoding/json"
	"net/http"
	"strconv"
	"github.com/gorilla/mux"
)

type Person struct {
	ID        string   `json:"id,omitempty"`
	FirstName string   `json:"firstName,omitempty"`
	LastName  string   `json:"lastName,omitempty"`
	Address   *Address `json:"address,omitempty"`
}
type Address struct {
	City    string `json:"city,omitempty"`
	Country string `json:"country,omitempty"`
}

var persons []Person

func GetAllPersons(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(persons)
}
func GetPerson(w http.ResponseWriter, r *http.Request) {
}
func CreatePerson(w http.ResponseWriter, r *http.Request) {
}
func DeletePerson(w http.ResponseWriter, r *http.Request) {
}
func main() {
	router := mux.NewRouter()
	for i := 1; i < 10; i++ {
		persons = append(persons, Person{ID: strconv.Itoa(i), FirstName: ("Abdul Samad " + strconv.Itoa(i)), LastName: "Ahmed", Address: &Address{City: "karachi", Country: "Pakistan"}})
	}
	router.HandleFunc("/Persons", GetAllPersons).Methods("GET")
	router.HandleFunc("/Person/{id}", GetPerson).Methods("GET")
	router.HandleFunc("/Person/{id}", CreatePerson).Methods("POST")
	router.HandleFunc("/Person/{id}", DeletePerson).Methods("DELETE")
	http.ListenAndServe(":12345", router)
}
