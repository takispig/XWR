function pickRandPlaylist(){
	var playlists = ['https://www.youtube.com/playlist?list=PLknFYBdDe0JBIZE4ZrHcGTNN8n2_koc4T','https://www.youtube.com/playlist?list=PLknFYBdDe0JDPMmlJ4KXsi25A07NWMFnw','https://www.youtube.com/playlist?list=PLknFYBdDe0JD4u4z-FbMTTUN9a7bTOZSv','https://www.youtube.com/playlist?list=PLknFYBdDe0JC8ELPIjXy21YJol_sjGU4L','https://www.youtube.com/playlist?list=PLknFYBdDe0JCJSW2N28dedT2fh1WDVkSu','https://www.youtube.com/playlist?list=PLknFYBdDe0JBs0ueCy_PZ60FikQRvfLpO','https://www.youtube.com/playlist?list=PLknFYBdDe0JDvO61HseHQNJE8Q0gT3cOU','https://www.youtube.com/playlist?list=PLknFYBdDe0JD04_3rsQbQEjVkSt3DAsPs','https://www.youtube.com/playlist?list=PLknFYBdDe0JAtboDDfonMSI75fbeya_fd','https://www.youtube.com/playlist?list=PLknFYBdDe0JCXIr8BxaqLQc2dtN9-BGRo','https://www.youtube.com/playlist?list=PLknFYBdDe0JDMDzGIAI5SaFaFdG9pXOuN','https://www.youtube.com/playlist?list=PLknFYBdDe0JCjBHirMdGgtONWFQYVaIxx','https://www.youtube.com/playlist?list=PLknFYBdDe0JCRDwf1ysiq6KBk_hp2gILi','https://www.youtube.com/playlist?list=PLknFYBdDe0JAbNeoAfxR-J-JJ8ta-voq-','https://www.youtube.com/playlist?list=PLknFYBdDe0JDvaCSwFuI4etvSbHxiUWF7','https://www.youtube.com/playlist?list=PLknFYBdDe0JCpXQ7SoIlPAbp6jENF6Fi7','https://www.youtube.com/playlist?list=PLknFYBdDe0JBXByk42U1-AAqAJAfmtrS6','https://www.youtube.com/playlist?list=PLknFYBdDe0JA4lGW-kHfEviRwyVN6YmwO','https://www.youtube.com/playlist?list=PLknFYBdDe0JCJLbeEQUXBJNlgpHnnltJf','https://www.youtube.com/playlist?list=PLknFYBdDe0JDPthhZRHtarcZ-YMcFV2qV','https://www.youtube.com/playlist?list=PLknFYBdDe0JCZSU2WKa3zI4umUkxvaDly','https://www.youtube.com/playlist?list=PLknFYBdDe0JAHAhxMDurxw7cOlRaake6z','https://www.youtube.com/playlist?list=PLknFYBdDe0JC8MyxwM2DwhJjz-Cf-r5wH','https://www.youtube.com/playlist?list=PLknFYBdDe0JASQFJFwKoMtRXbB51eN0bZ','https://www.youtube.com/playlist?list=PLknFYBdDe0JA1qYq7I99N6uoKSRQtHyQ6','https://www.youtube.com/playlist?list=PLknFYBdDe0JB6hXtAnkKe35CR5YKDuV5h','https://www.youtube.com/playlist?list=PLknFYBdDe0JDUClJFZGRSq9CPsOx8IEia','https://www.youtube.com/playlist?list=PLknFYBdDe0JBhQ3RaoYyIdwj__YZRB_8L','https://www.youtube.com/playlist?list=PLknFYBdDe0JBTTTyfFIeSBnJQJmUg1idO','https://www.youtube.com/playlist?list=PLknFYBdDe0JBAFTHvVwZkXpuVAvSUNe7z'];
	var rand_index = Math.floor(Math.random() * playlists.length); 
	window.open(playlists[rand_index], "_blank");
}
