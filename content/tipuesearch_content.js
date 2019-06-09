var tipuesearch = {"pages": [{'title': '簡介', 'text': '本學期總共使用了Onshape、Vrep、以及Github倉儲的管理推送，並分組進行協同編輯，主要是針對於手足球機構模擬，透過 Onshape進行繪圖，配合程式及Vrep進行機構模擬。 \n', 'tags': '', 'url': '簡介.html'}, {'title': '學員出席', 'text': '', 'tags': '', 'url': '學員出席.html'}, {'title': 'Github 倉儲管理', 'text': '', 'tags': '', 'url': 'Github 倉儲管理.html'}, {'title': 'V-rep操作影片', 'text': '送球機構模擬 \n \n 人與人對打操作模擬 \n \n 人機對打模擬 \n \n \n', 'tags': '', 'url': 'V-rep操作影片.html'}, {'title': 'Onshape操作影片', 'text': '球桌繪製 \n \n 球桿繪製 \n \n 球員繪製 \n \n 爆炸圖操作 \n \n \n 操作影片 \n', 'tags': '', 'url': 'Onshape操作影片.html'}, {'title': '程式', 'text': '人機對打 \n import vrep\nimport sys, math\nimport keyboard\n# child threaded script: \n# 內建使用 port 19997 若要加入其他 port, 在  serve 端程式納入\n#simExtRemoteApiStart(19999)\n  \nvrep.simxFinish(-1)\n  \nclientID = vrep.simxStart(\'127.0.0.1\', 19997, True, True, 5000, 5)\n\nKickBallV = 360\n#\n\nKickBallV = 200\n\nMove_Minus =-0.2        \nMove_Plus =0.2\nn=1\nR_KickBallVel = (math.pi/300)*KickBallV\n#\nB_KickBallVel = -(math.pi/300)*KickBallV\nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n\nerrorCode,Sphere_handle=vrep.simxGetObjectHandle(clientID,\'Sphere\',vrep.simx_opmode_oneshot_wait)\nerrorCode,P1_handle=vrep.simxGetObjectHandle(clientID,\'P1\',vrep.simx_opmode_oneshot_wait)\nerrorCode,A1_handle=vrep.simxGetObjectHandle(clientID,\'A1\',vrep.simx_opmode_oneshot_wait)\nerrorCode,R1_handle=vrep.simxGetObjectHandle(clientID,\'R1\',vrep.simx_opmode_oneshot_wait)\nerrorCode,B1_handle=vrep.simxGetObjectHandle(clientID,\'B1\',vrep.simx_opmode_oneshot_wait)\nerrorCode,P2_handle=vrep.simxGetObjectHandle(clientID,\'P2\',vrep.simx_opmode_oneshot_wait)\nerrorCode,A2_handle=vrep.simxGetObjectHandle(clientID,\'A2\',vrep.simx_opmode_oneshot_wait)\nerrorCode,R2_handle=vrep.simxGetObjectHandle(clientID,\'R2\',vrep.simx_opmode_oneshot_wait)\nerrorCode,B2_handle=vrep.simxGetObjectHandle(clientID,\'B2\',vrep.simx_opmode_oneshot_wait)\n\nif errorCode == -1:\n    print(\'Can not find left or right motor\')\n    sys.exit()\ndef start():\n    errorCode = vrep.simxStartSimulation(clientID,vrep.simx_opmode_oneshot_wait)\n\ndef stop():\n    errorCode = vrep.simxStartSimulation(clientID,vrep.simx_opmode_oneshot_wait)\n\ndef pause():\n    errorCode = vrep.simxStartSimulation(clientID,vrep.simx_opmode_oneshot_wait)\n\ndef getballposition():\n    errorCode,position_A1R=vrep.simxGetObjectPosition(clientID,A1_handle,-1,vrep.simx_opmode_oneshot)\n    errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)\n    A1v=position_S[1] - position_A1R[1]\n    AA1v=position_S[0] - position_A1R[0]\n    while True:\n        if A1v <= 0 and AA1v <= 0.015:\n            errorCode,position_A1R=vrep.simxGetObjectPosition(clientID,A1_handle,-1,vrep.simx_opmode_oneshot)\n            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)\n            A1v =position_S[1]- position_A1R[1]\n            AA1v =position_S[0] - position_A1R[0]\n            vrep.simxSetJointTargetVelocity(clientID,R1_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)\n          \n        elif A1v > 0 and AA1v <= 0.015:\n            errorCode,position_A1R=vrep.simxGetObjectPosition(clientID,A1_handle,-1,vrep.simx_opmode_oneshot)\n            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)\n            A1v =position_S[1]- position_A1R[1]\n            AA1v =position_S[0] - position_A1R[0]\n            vrep.simxSetJointTargetVelocity(clientID,R1_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)\n              \n        elif A1v <= 0 and AA1v > 0.015:\n            errorCode,position_A1R=vrep.simxGetObjectPosition(clientID,A1_handle,-1,vrep.simx_opmode_oneshot)\n            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)\n            A1v =position_S[1]- position_A1R[1]\n            AA1v =position_S[0] - position_A1R[0]\n            vrep.simxSetJointTargetVelocity(clientID,R1_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)\n          \n        elif A1v > 0 and AA1v > 0.015:\n            errorCode,position_A1R=vrep.simxGetObjectPosition(clientID,A1_handle,-1,vrep.simx_opmode_oneshot)\n            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)\n            A1v =position_S[1]- position_A1R[1]\n            AA1v =position_S[0] - position_A1R[0]\n            vrep.simxSetJointTargetVelocity(clientID,R1_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)\n            \n        try:\n            if keyboard.is_pressed(\'w\'): \n                vrep.simxSetJointTargetVelocity(clientID,R2_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'x\'):  \n                vrep.simxSetJointTargetVelocity(clientID,R2_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'d\'):  \n                vrep.simxSetJointTargetVelocity(clientID,P2_handle,0.05,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'s\'):\n                vrep.simxSetJointTargetVelocity(clientID,P2_handle,0,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'a\'):  \n                vrep.simxSetJointTargetVelocity(clientID,P2_handle,-0.05,vrep.simx_opmode_oneshot_wait)\n            else:\n                pass\n        except:\n            break\n            \n        MMMB = A1v*-2\n        vrep.simxSetJointTargetVelocity(clientID,P1_handle,MMMB,vrep.simx_opmode_oneshot_wait)\n\nvrep.simxSetJointTargetVelocity(clientID,R1_handle,0,vrep.simx_opmode_oneshot_wait)\nvrep.simxSetJointTargetVelocity(clientID,P2_handle,0,vrep.simx_opmode_oneshot_wait)\n\nstart()\ngetballposition()\nstop()\n \n \n \n 玩家對玩家 \n import vrep\nimport sys, math\nimport keyboard\n# child threaded script: \n# 內建使用 port 19997 若要加入其他 port, 在  serve 端程式納入\n#simExtRemoteApiStart(19999)\n  \nvrep.simxFinish(-1)\n  \nclientID = vrep.simxStart(\'127.0.0.1\', 19997, True, True, 5000, 5)\nKickBallV = 360  \nMove_Minus =-0.1        \nMove_Plus =0.1\nn=1\nR_KickBallVel = (math.pi/180)*KickBallV\nB_KickBallVel = -(math.pi/180)*KickBallV\nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n\nerrorCode,P1_handle=vrep.simxGetObjectHandle(clientID,\'P1\',vrep.simx_opmode_oneshot_wait)\nerrorCode,A1_handle=vrep.simxGetObjectHandle(clientID,\'A1\',vrep.simx_opmode_oneshot_wait)\nerrorCode,R1_handle=vrep.simxGetObjectHandle(clientID,\'R1\',vrep.simx_opmode_oneshot_wait)\nerrorCode,B1_handle=vrep.simxGetObjectHandle(clientID,\'B1\',vrep.simx_opmode_oneshot_wait)\nerrorCode,P2_handle=vrep.simxGetObjectHandle(clientID,\'P2\',vrep.simx_opmode_oneshot_wait)\nerrorCode,A2_handle=vrep.simxGetObjectHandle(clientID,\'A2\',vrep.simx_opmode_oneshot_wait)\nerrorCode,R2_handle=vrep.simxGetObjectHandle(clientID,\'R2\',vrep.simx_opmode_oneshot_wait)\nerrorCode,B2_handle=vrep.simxGetObjectHandle(clientID,\'B2\',vrep.simx_opmode_oneshot_wait)\n#vrep.simxSetJointTargetVelocity(clientID,P1_handle,-6,vrep.simx_opmode_oneshot_wait)\nvrep.simxStartSimulation(clientID,vrep.simx_opmode_oneshot_wait)\nwhile True:\n    try:\n            if keyboard.is_pressed(\'w\'): \n                errorCode = vrep.simxSetJointTargetVelocity(clientID,R1_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'x\'):  \n                errorCode = vrep.simxSetJointTargetVelocity(clientID,R1_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'a\'):  \n                errorCode = vrep.simxSetJointTargetVelocity(clientID,P1_handle,0.1,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'s\'):  \n                errorCode = vrep.simxSetJointTargetVelocity(clientID,P1_handle,0,vrep.simx_opmode_oneshot_wait)\n                errorCode = vrep.simxSetJointTargetVelocity(clientID,R1_handle,0,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'d\'):  \n                errorCode =  vrep.simxSetJointTargetVelocity(clientID,P1_handle,-0.1,vrep.simx_opmode_oneshot_wait)\n            if keyboard.is_pressed(\'8\'): \n                errorCode = vrep.simxSetJointTargetVelocity(clientID,R2_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'2\'):  \n                errorCode = vrep.simxSetJointTargetVelocity(clientID,R2_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait) \n            elif keyboard.is_pressed(\'6\'):  \n                errorCode = vrep.simxSetJointTargetVelocity(clientID,P2_handle,0.1,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'5\'):  \n                errorCode = vrep.simxSetJointTargetVelocity(clientID,P2_handle,0,vrep.simx_opmode_oneshot_wait)\n                errorCode = vrep.simxSetJointTargetVelocity(clientID,R2_handle,0,vrep.simx_opmode_oneshot_wait)\n            elif keyboard.is_pressed(\'4\'):  \n                errorCode =  vrep.simxSetJointTargetVelocity(clientID,P2_handle,-0.1,vrep.simx_opmode_oneshot_wait)\n            else:\n                pass\n    except:\n            break\n\n#vrep.simxStopSimulation(clientID,vrep.simx_opmode_oneshot_wait) \n \n', 'tags': '', 'url': '程式.html'}, {'title': '問題QA', 'text': '\n \n', 'tags': '', 'url': '問題QA.html'}]};