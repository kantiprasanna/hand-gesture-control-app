
import mediapipe as mp
import cv2
import numpy as np
import uuid
import os


mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands


import pyautogui as pag
import webbrowser
import time
import sys
from datetime import datetime


from matplotlib import pyplot as plt


# # LEFT HAND  <br>
# index_down   0  <br>
# middle_down   1  <br>
# ring_down     2  <br>
# pinky_down    3  <br> 
# 
# index_up      4  <br> 
# middle_up     5  <br> 
# ring_up       6  <br> 
# pinky_up      7  <br> 
# 
# index_middle_down    8  <br> 
# index_ring_down      9  <br> 
# index_pinky_down     10  <br> 
# 
# middle_ring_down     11  <br> 
# middle_pinky_down    12  <br> 
# 
# ring_pinky_down      13  <br> 
# 
# ### RIGHT HAND 
# index  down   14  <br>
# middle_down   15  <br>
# ring_down     16  <br>
# pinky_down    17  <br> 
# 
# index_up      18  <br> 
# middle_up     19  <br> 
# ring_up       20 <br> 
# pinky_up      21  <br> 
# 
# index_middle_down    22  <br> 
# index_ring_down      23  <br> 
# index_pinky_down     24  <br> 
# 
# middle_ring_down     25  <br> 
# middle_pinky_down    26  <br> 
# 
# ring_pinky_down      27  <br> 
# 


#HAND GESTURES 
def index_down(a):
    if(a[1] and not a[2] and not a[3] and not a[4]  ):
        return True
    return False
def middle_down(a):
    if(not a[1] and a[2] and not a[3] and not a[4]  ):
        return True
    return False
def ring_down(a):
    if(not a[1] and not a[2] and  a[3] and not a[4]  ):
        return True
    return False
def pinky_down(a):
    if(not a[1] and not a[2] and not a[3] and  a[4]  ):
        return True
    return False

def index_up(a):
    if(not a[1] and  a[2] and  a[3] and  a[4]  ):
        return True
    return False
def middle_up(a):
    if(a[1] and not a[2] and  a[3] and  a[4]  ):
        return True
    return False
def ring_up(a):
    if(a[1] and a[2] and not a[3] and a[4]  ):
        return True
    return False
def pinky_up(a):
    if(a[1] and a[2] and a[3] and not a[4]  ):
        return True
    return False

def index_middle_down(a): #
    if(a[1] and  a[2] and not a[3] and not a[4]  ):
        return True
    return False
def index_ring_down(a):
    if(a[1] and not a[2] and  a[3] and not a[4]  ):
        return True
    return False
def index_pinky_down(a):
    if(a[1] and not a[2] and not a[3] and  a[4]  ):
        return True
    return False

def middle_ring_down(a):
    if(not a[1] and  a[2] and  a[3] and not a[4]  ):
        return True
    return False
def middle_pinky_down(a):
    if(not a[1] and  a[2] and not a[3] and  a[4]  ):
        return True
    return False
def ring_pinky_down(a):
    if(not a[1] and not a[2] and  a[3] and  a[4]  ):
        return True
    return False



#FUNCTIONS / OPERATIONS 
def page_up():
    pag.press("pageup")

def page_down():
    pag.press("pagedown")

def right_click():
    pag.click(button="right")

def left_click():
    pag.click(button="left")
    
def move_left():
    pag.move(-15, 0)
    
def move_right():
    pag.move(15, 0)
    
def move_down():
    pag.move(0, -15)
    
def move_up():
    pag.move(0, 15)

def open_google():
    webbrowser.open("https://www.google.com")
    time.sleep(3)
    pag.press('tab')
    pag.press('enter')

def take_screenshot():

    now = datetime.now()
    name=now.strftime("%d-%m-%Y %H-%M-%S")
    pag.screenshot(str(name)+".png")

def arrow_left():
    pag.press('left')

def arrow_right():
    pag.press('right')

def copy():
    pag.hotkey('ctrl', 'c')  
def paste():
    pag.hotkey('ctrl', 'v') 

def zoom_in():
    pag.hotkey('ctrl', '+') 
def zoom_out():
    pag.hotkey('ctrl', '-')
    
def next_tab():
    pag.hotkey('ctrl', 'tab')
def prev_tab():
    pag.hotkey('ctrl', 'shift','tab')

def new_tab():
    pag.hotkey('ctrl', 't')
def new_incognito_tab():
    pag.hotkey('ctrl', 'shift','n')
    
def new_window():
    pag.hotkey('ctrl', 'n')

def close_tab():
    pag.hotkey('ctrl', 'w')

def close_all_tab():
    pag.hotkey('ctrl', 'shift','w')

def save():
    pag.hotkey('ctrl', 's')

def print_page():
    pag.hotkey('ctrl', 'p')

def history():
    pag.hotkey('ctrl', 'h')

def downloads():
    pag.hotkey('ctrl', 'j')

def reload_tab():
    pag.hotkey('ctrl', 'r')

def no_operation():
    pass

def draw_finger_angles(image, results, joint_list):
    # Loop through hands
    
    left_points=[]
    right_points=[]
    left_down=[]
    right_down=[]
    
    for hand in results.multi_hand_landmarks:
        #Loop through joint sets 
        #for joint in joint_list:
        a=hand.landmark[0].x 
        b=hand.landmark[4].x
        if(a<b):#left points
            for i in range(21):
                left_points.append(np.array([hand.landmark[i].x, hand.landmark[i].y]))
        elif(a>b): 
            for i in range(21):
                right_points.append(np.array([hand.landmark[i].x, hand.landmark[i].y]))
    
    if(len(left_points)>0):
        for i in range(4,21,4):
            if(left_points[i][1] > left_points[i-2][1]):
                left_down.append(True)
            else:
                left_down.append(False)
    if(len(right_points)>0):
        for i in range(4,21,4):
            if(right_points[i][1] > right_points[i-2][1]):
                right_down.append(True)
            else:
                right_down.append(False)
    
    

    #         cv2.putText(image, "1", tuple(np.multiply(points[8], [640, 480]).astype(int)),
#                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)


#         cv2.putText(image, "2", tuple(np.multiply(points[12], [640, 480]).astype(int)),
#                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

#         cv2.putText(image, "3", tuple(np.multiply(points[16], [640, 480]).astype(int)),
#                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

#         cv2.putText(image, "4", tuple(np.multiply(points[20], [640, 480]).astype(int)),
#                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

    if(len(left_points)>0):
        cv2.putText(image, "left", tuple(np.multiply(left_points[0], [640, 480]).astype(int)),
               cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

    if(len(right_points)>0):
        cv2.putText(image, "right", tuple(np.multiply(right_points[0], [640, 480]).astype(int)),
               cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)


#     if(len(left_points)>0 and len(right_points)>0): # index overlap 
#         pag.click(button="right")
    
    if(len(left_points)>0):
        
        if(index_down(left_down) and custom_gesture.get("0")!=None):
            custom_gesture["0"]()
        if(middle_down(left_down) and custom_gesture.get("1")!=None):
            custom_gesture["1"]()
        if(ring_down(left_down) and custom_gesture.get("2")!=None):
            custom_gesture["2"]()
        if(pinky_down(left_down) and custom_gesture.get("3")!=None):
            custom_gesture["3"]()
            

        if(index_up(left_down) and custom_gesture.get("4")!=None):
            custom_gesture["4"]()
        if(middle_up(left_down) and custom_gesture.get("5")!=None):
            custom_gesture["5"]()
        if(ring_up(left_down) and custom_gesture.get("6")!=None):
            custom_gesture["6"]()
        if(pinky_up(left_down) and custom_gesture.get("7")!=None):
            custom_gesture["7"]()

        if(index_middle_down(left_down) and custom_gesture.get("8")!=None):
            custom_gesture["8"]()
        if(index_ring_down(left_down) and custom_gesture.get("9")!=None):
            custom_gesture["9"]()
        if(index_pinky_down(left_down) and custom_gesture.get("10")!=None):
            custom_gesture["10"]()

        if(middle_ring_down(left_down) and custom_gesture.get("11")!=None):
            custom_gesture["11"]()
        if(middle_pinky_down(left_down) and custom_gesture.get("12")!=None):
            custom_gesture["12"]()
        if(ring_pinky_down(left_down) and custom_gesture.get("13")!=None):
            custom_gesture["13"]()

        
#         if(points[16][1] < points[14][1]):
#             pass
#         if(points[20][1] < points[18][1]):
#             pass


    if(len(right_points)>0):#right hand
        if(index_down(right_down) and custom_gesture.get("14")!=None):
            custom_gesture["14"]()
        if(middle_down(right_down) and custom_gesture.get("15")!=None):
            custom_gesture["15"]()
        if(ring_down(right_down) and custom_gesture.get("16")!=None):
            custom_gesture["16"]()
        if(pinky_down(right_down) and custom_gesture.get("17")!=None):
            custom_gesture["17"]()
            

        if(index_up(right_down) and custom_gesture.get("18")!=None):
            custom_gesture["18"]()
        if(middle_up(right_down) and custom_gesture.get("19")!=None):
            custom_gesture["19"]()
        if(ring_up(right_down) and custom_gesture.get("20")!=None):
            custom_gesture["20"]()
        if(pinky_up(right_down) and custom_gesture.get("21")!=None):
            custom_gesture["21"]()

        if(index_middle_down(right_down) and custom_gesture.get("22")!=None):
            custom_gesture["22"]()
        if(index_ring_down(right_down) and custom_gesture.get("23")!=None):
            custom_gesture["23"]()
        if(index_pinky_down(right_down) and custom_gesture.get("24")!=None):
            custom_gesture["24"]()

        if(middle_ring_down(right_down) and custom_gesture.get("25")!=None):
            custom_gesture["25"]()
        if(middle_pinky_down(right_down) and custom_gesture.get("26")!=None):
            custom_gesture["26"]()
        if(ring_pinky_down(right_down) and custom_gesture.get("27")!=None):
            custom_gesture["27"]()
            
    return image


# In[22]:



function_dic={"page_up":page_up,"page_down":page_down,"left_click":left_click,"right_click":right_click,
"move_left":move_left,"move_right":move_right,"move_up":move_up,"move_down":move_down,
"open_google":open_google,"take_screenshot":take_screenshot,"arrow_left":arrow_left,"arrow_right":arrow_right,"no_operation":no_operation,"copy":copy,"paste":paste,
 "zoom_in":zoom_in,"zoom_out":zoom_out,"next_tab":next_tab,"prev_tab":prev_tab,"new_tab":new_tab,"new_incognito_tab":new_incognito_tab,
  "new_window":new_window,"close_tab":close_tab,"close_all_tab":close_all_tab,"save":save,"print_page":print_page,"history":history,"downloads" :downloads,
    "reload_tab":reload_tab
             }

custom_gesture={}
# for i in range(1,len(sys.argv),2):
#     custom_gesture[sys.arg[i]]=function_dic[sys.arg[i+1]]

#custom_gesture={"27":page_up,"18":page_down,"4":take_screenshot,"5":print_page,"2":move_right}

for i in range(1, len(sys.argv)):
    custom_gesture[str(i-1)] = function_dic[sys.argv[i]]


# In[23]:


cap = cv2.VideoCapture(0)
result=0
with mp_hands.Hands(min_detection_confidence=0.8, min_tracking_confidence=0.5) as hands: 
    while cap.isOpened():
        ret, frame = cap.read()
        
        # BGR 2 RGB
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
        # Flip on horizontal
        image = cv2.flip(image, 1)
        
        # Set flag
        image.flags.writeable = False
        
        # Detections
        results = hands.process(image)
        
        # Set flag to true
        image.flags.writeable = True
        
        # RGB 2 BGR
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        
        # Detections
        print(results)
        
        # Rendering results
        if results.multi_hand_landmarks:
            for num, hand in enumerate(results.multi_hand_landmarks):
                mp_drawing.draw_landmarks(image, hand, mp_hands.HAND_CONNECTIONS, 
                                        mp_drawing.DrawingSpec(color=(121, 22, 76), thickness=2, circle_radius=4),
                                        mp_drawing.DrawingSpec(color=(250, 44, 250), thickness=2, circle_radius=2),
                                         )
                
                # Render left or right detection
          
                    
            # Draw angles to image from joint list
            draw_finger_angles(image, results, [[8,7,6], [12,11,10], [16,15,14], [20,19,18]])
            
        # Save our image    
        #cv2.imwrite(os.path.join('Output Images', '{}.jpg'.format(uuid.uuid1())), image)
        cv2.imshow('Hand Tracking', image)

        if cv2.waitKey(10) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()


# In[24]:


#results.multi_hand_landmarks[0].landmark[mp_hands.HandLandmark.WRIST]


# In[13]:


results.multi_handedness[0].classification


# In[ ]:





# In[ ]:





# In[ ]:




