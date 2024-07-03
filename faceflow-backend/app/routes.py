from flask import Blueprint, request, jsonify
from . import db
from .models import Visitor
from datetime import datetime

main_bp = Blueprint('main', __name__)

@main_bp.route('/visitors', methods=['GET'])
def get_visitors():
    visitors = Visitor.query.all()
    results = [
        {
            "id": visitor.id,
            "name": visitor.name,
            "visits": visitor.visits,
            "last_visit": visitor.last_visit
        } for visitor in visitors]

    return jsonify(results), 200

@main_bp.route('/visitor', methods=['POST'])
def add_visitor():
    data = request.get_json()
    name = data.get('name')
    
    visitor = Visitor.query.filter_by(name=name).first()
    if visitor:
        visitor.visits += 1
        visitor.last_visit = datetime.utcnow()
    else:
        visitor = Visitor(name=name, visits=1)
    
    db.session.add(visitor)
    db.session.commit()

    return jsonify({"message": "Visitor added/updated successfully"}), 201
