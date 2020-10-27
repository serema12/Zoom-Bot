import botsignin
import time
from queue import Queue
if __name__ == "__main__":
    meetingqueue = Queue(maxsize = 5)
    
    meetingFiles = open("link.txt",'r+')
    #Set: Avoid dupplicate link
    for link in list(set(meetingFiles.readlines())):
        meetingqueue.put(link)
        

    #need to regular expression to check whether the link is zoom
    while meetingqueue.qsize() is not None:
        meetingLink = meetingqueue.get()
        print(meetingLink)
        botsignin.log_in_meeting(meetingLink = meetingLink,duration = 30,botname='BOT')
        print(meetingqueue.qsize())
        time.sleep(2)
    
    #meetingLink = 'https://us04web.zoom.us/j/6860428517?pwd=WUNuUTBXQnlDeDVPRDd0b3VaVkdmQT09'
    #
    
