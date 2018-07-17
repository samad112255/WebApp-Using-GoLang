package main

import (
	"net/http"
)

func handleindex(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello WELCOME TO INDEX PAGE"))
}
func main() {
	http.HandleFunc("/", handleindex)
	http.ListenAndServe(":8000", nil)
}
