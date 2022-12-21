run: 
	@docker build -t reactflasktemplate .
	@docker run -p 8080:8080 -it reactflasktemplate