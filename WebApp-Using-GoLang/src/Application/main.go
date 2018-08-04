package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type Student struct {
	ID         string `json:"id,omitempty"`
	Name       string `json:"name,omitempty"`
	FatherName string `json:"fatherName,omitempty"`
	Gender     string `json:"gender,omitempty"`
	Age        string `json:"age,omitempty"`
	Address    string `json:"address,omitempty"`
	Contact    string `json:"contact,omitempty"`
}

var Students []Student

func GetAllStudents(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(Students)
}
func GetStudent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for _, person := range Students {
		if person.ID == params["id"] {
			json.NewEncoder(w).Encode(person)
			return
		}
	}
	json.NewEncoder(w).Encode(&Student{})
}
func CreateStudent(w http.ResponseWriter, r *http.Request) {
	//Allow CORS here By * or specific origin
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var student Student
	_ = json.NewDecoder(r.Body).Decode(&student)
	student.ID = strconv.Itoa(len(Students) + 1)
	Students = append(Students, student)
	json.NewEncoder(w).Encode(Students)
}

func DeleteStudent(w http.ResponseWriter, r *http.Request) {
}
func main() {
	router := mux.NewRouter()
	// for i := 1; i < 3; i++ {
	// 	Students = append(Students, Student{ID: strconv.Itoa(i),
	// 		Name:       ("Abdul Samad " + strconv.Itoa(i)),
	// 		FatherName: "Ahmed",
	// 		Gender:     "Male",
	// 		Age:        "24",
	// 		Address:    "c-9/7",
	// 		Contact:    "03428185670"})

	// }
	router.HandleFunc("/students", GetAllStudents).Methods("GET")
	router.HandleFunc("/student/{id}", GetStudent).Methods("GET")
	router.HandleFunc("/student", CreateStudent).Methods("POST", "OPTIONS")
	router.HandleFunc("/student/{id}", DeleteStudent).Methods("DELETE")

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
		// Enable Debugging for testing, consider disabling in production
		Debug:          true,
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"Access-Control-Allow-Origin", "Content-Type"},
	})

	handler := c.Handler(router)
	log.Fatal(http.ListenAndServe(":3001", handler))
}
