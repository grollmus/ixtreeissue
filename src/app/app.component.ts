import { Component } from '@angular/core';
import { TreeModel } from '@siemens/ix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ix-tree issue';
  model: TreeModel<{
    id: string;
    name: string;
  }> = {
    "root": {
      "id": "root",
      "data": {
        "id": "root",
        "name": ""
      },
      "hasChildren": true,
      "children": ["sample", "node-1", "node-2", "node-3", "node-4", "node-5", "node-6", "node-7", "node-8", "node-9", "node-10", "node-11"]
    },
    "sample": {
      "id": "sample",
      "data": {
        "id": "sample",
        "name": "Sample"
      },
      "hasChildren": true,
      "children": ["sample-child-1", "sample-child-2"]
    },
    "sample-child-1": {
      "id": "sample-child-1",
      "data": {
        "id": "sample-child-1",
        "name": "Sample Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "sample-child-2": {
      "id": "sample-child-2",
      "data": {
        "id": "sample-child-2",
        "name": "Sample Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-1": {
      "id": "node-1",
      "data": {
        "id": "node-1",
        "name": "Node 1"
      },
      "hasChildren": true,
      "children": ["node-1-child-1", "node-1-child-2"]
    },
    "node-1-child-1": {
      "id": "node-1-child-1",
      "data": {
        "id": "node-1-child-1",
        "name": "Node 1 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-1-child-2": {
      "id": "node-1-child-2",
      "data": {
        "id": "node-1-child-2",
        "name": "Node 1 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-2": {
      "id": "node-2",
      "data": {
        "id": "node-2",
        "name": "Node 2"
      },
      "hasChildren": true,
      "children": ["node-2-child-1", "node-2-child-2"]
    },
    "node-2-child-1": {
      "id": "node-2-child-1",
      "data": {
        "id": "node-2-child-1",
        "name": "Node 2 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-2-child-2": {
      "id": "node-2-child-2",
      "data": {
        "id": "node-2-child-2",
        "name": "Node 2 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-3": {
      "id": "node-3",
      "data": {
        "id": "node-3",
        "name": "Node 3"
      },
      "hasChildren": true,
      "children": ["node-3-child-1", "node-3-child-2"]
    },
    "node-3-child-1": {
      "id": "node-3-child-1",
      "data": {
        "id": "node-3-child-1",
        "name": "Node 3 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-3-child-2": {
      "id": "node-3-child-2",
      "data": {
        "id": "node-3-child-2",
        "name": "Node 3 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-4": {
      "id": "node-4",
      "data": {
        "id": "node-4",
        "name": "Node 4"
      },
      "hasChildren": true,
      "children": ["node-4-child-1", "node-4-child-2"]
    },
    "node-4-child-1": {
      "id": "node-4-child-1",
      "data": {
        "id": "node-4-child-1",
        "name": "Node 4 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-4-child-2": {
      "id": "node-4-child-2",
      "data": {
        "id": "node-4-child-2",
        "name": "Node 4 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-5": {
      "id": "node-5",
      "data": {
        "id": "node-5",
        "name": "Node 5"
      },
      "hasChildren": true,
      "children": ["node-5-child-1", "node-5-child-2"]
    },
    "node-5-child-1": {
      "id": "node-5-child-1",
      "data": {
        "id": "node-5-child-1",
        "name": "Node 5 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-5-child-2": {
      "id": "node-5-child-2",
      "data": {
        "id": "node-5-child-2",
        "name": "Node 5 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-6": {
      "id": "node-6",
      "data": {
        "id": "node-6",
        "name": "Node 6"
      },
      "hasChildren": true,
      "children": ["node-6-child-1", "node-6-child-2"]
    },
    "node-6-child-1": {
      "id": "node-6-child-1",
      "data": {
        "id": "node-6-child-1",
        "name": "Node 6 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-6-child-2": {
      "id": "node-6-child-2",
      "data": {
        "id": "node-6-child-2",
        "name": "Node 6 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-7": {
      "id": "node-7",
      "data": {
        "id": "node-7",
        "name": "Node 7"
      },
      "hasChildren": true,
      "children": ["node-7-child-1", "node-7-child-2"]
    },
    "node-7-child-1": {
      "id": "node-7-child-1",
      "data": {
        "id": "node-7-child-1",
        "name": "Node 7 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-7-child-2": {
      "id": "node-7-child-2",
      "data": {
        "id": "node-7-child-2",
        "name": "Node 7 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-8": {
      "id": "node-8",
      "data": {
        "id": "node-8",
        "name": "Node 8"
      },
      "hasChildren": true,
      "children": ["node-8-child-1", "node-8-child-2"]
    },
    "node-8-child-1": {
      "id": "node-8-child-1",
      "data": {
        "id": "node-8-child-1",
        "name": "Node 8 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-8-child-2": {
      "id": "node-8-child-2",
      "data": {
        "id": "node-8-child-2",
        "name": "Node 8 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-9": {
      "id": "node-9",
      "data": {
        "id": "node-9",
        "name": "Node 9"
      },
      "hasChildren": true,
      "children": ["node-9-child-1", "node-9-child-2"]
    },
    "node-9-child-1": {
      "id": "node-9-child-1",
      "data": {
        "id": "node-9-child-1",
        "name": "Node 9 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-10": {
      "id": "node-10",
      "data": {
        "id": "node-10",
        "name": "Node 10"
      },
      "hasChildren": true,
      "children": ["node-10-child-1", "node-10-child-2"]
    },
    "node-10-child-1": {
      "id": "node-10-child-1",
      "data": {
        "id": "node-10-child-1",
        "name": "Node 10 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-10-child-2": {
      "id": "node-10-child-2",
      "data": {
        "id": "node-10-child-2",
        "name": "Node 10 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
    "node-11": {
      "id": "node-11",
      "data": {
        "id": "node-11",
        "name": "Node 11"
      },
      "hasChildren": true,
      "children": ["node-11-child-1", "node-11-child-2"]
    },
    "node-11-child-1": {
      "id": "node-11-child-1",
      "data": {
        "id": "node-11-child-1",
        "name": "Node 11 Child 1"
      },
      "hasChildren": false,
      "children": []
    },
    "node-11-child-2": {
      "id": "node-11-child-2",
      "data": {
        "id": "node-11-child-2",
        "name": "Node 11 Child 2"
      },
      "hasChildren": false,
      "children": []
    },
  };
}
