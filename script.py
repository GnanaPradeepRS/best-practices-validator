# from linkedin_api import Linkedin
# from flask import request, Flask, jsonify

# app = Flask(__name__)

# @app.route("/externalapihandler/socialhandle",  methods=['POST'])
# def home_view():
#     try:
#         username = request.json.get('linkedin')
#         auth = Linkedin('cruz.thepal@gmail.com', 'iwbah@77')
#         # print(auth)
#         # profile = auth.get_company('riversand')
#         # print(profile)
#         return jsonify({"count" : username})
#     # return username
#     except :
#         print('error')
# if __name__ == "__main__": 
#     app.run()
import sys
import json
from linkedin_api import Linkedin
from flask import request, Flask, jsonify
# Takes first name and last name via command  
# line arguments and then display them
auth = Linkedin('cruz.thepal@gmail.com', 'iwbah@77')
profile = auth.get_company(sys.argv[1])
print(profile)
