import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, RowNode } from 'ag-grid-community';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public rowData;
  public columnDefs: ColDef[] = [];
  public gridOptions;
  private gridApi!: GridApi;
  public params;
  public isAdd = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    // Mock Data for restraurants, Typically this is will be response form a service call.
    const restaurants = [
      {
        name: 'The Gourmet Kitchen',
        description:
          'A fine dining restaurant offering an exquisite menu with a fusion of global cuisines.',
        location: '123 Main Street, New York, NY',
        cuisine: 'Fusion',
        rating: 4.7,
        contact: '(212) 555-1234',
        website: 'www.thegourmetkitchen.com',
      },
      {
        name: 'Sushi Paradise',
        description:
          'A traditional Japanese sushi bar with a modern twist, serving fresh and delicious sushi and sashimi.',
        location: '456 Oak Avenue, San Francisco, CA',
        cuisine: 'Japanese',
        rating: 4.5,
        contact: '(415) 555-5678',
        website: 'www.sushiparadise.com',
      },
      {
        name: 'La Bella Italia',
        description:
          'A family-owned Italian restaurant known for its authentic pasta dishes and wood-fired pizzas.',
        location: '789 Elm Street, Chicago, IL',
        cuisine: 'Italian',
        rating: 4.8,
        contact: '(312) 555-9101',
        website: 'www.labellaitalia.com',
      },
      {
        name: 'Spice of India',
        description:
          'A vibrant Indian restaurant offering a wide range of flavorful dishes from different regions of India.',
        location: '321 Maple Drive, Seattle, WA',
        cuisine: 'Indian',
        rating: 4.6,
        contact: '(206) 555-2345',
        website: 'www.spiceofindia.com',
      },
      {
        name: 'The Burger Joint',
        description:
          'A casual eatery specializing in gourmet burgers, fries, and milkshakes.',
        location: '654 Pine Lane, Austin, TX',
        cuisine: 'American',
        rating: 4.4,
        contact: '(512) 555-6789',
        website: 'www.theburgerjoint.com',
      },
      {
        name: 'Casa Mexicana',
        description:
          'A lively Mexican restaurant serving traditional dishes and refreshing margaritas.',
        location: '987 Cedar Road, Los Angeles, CA',
        cuisine: 'Mexican',
        rating: 4.3,
        contact: '(323) 555-1011',
        website: 'www.casa-mexicana.com',
      },
      {
        name: 'Mediterranean Breeze',
        description:
          'A Mediterranean-inspired restaurant with a menu featuring fresh seafood and grilled specialties.',
        location: '213 Palm Street, Miami, FL',
        cuisine: 'Mediterranean',
        rating: 4.5,
        contact: '(305) 555-2022',
        website: 'www.mediterraneanbreeze.com',
      },
      {
        name: 'Green Garden',
        description:
          'A vegetarian and vegan-friendly restaurant offering a variety of plant-based dishes and smoothies.',
        location: '876 Oakwood Avenue, Portland, OR',
        cuisine: 'Vegetarian',
        rating: 4.7,
        contact: '(503) 555-3033',
        website: 'www.greengarden.com',
      },
      {
        name: 'Steakhouse 101',
        description:
          'An upscale steakhouse known for its premium cuts of meat and elegant ambiance.',
        location: '145 Maple Avenue, Dallas, TX',
        cuisine: 'Steakhouse',
        rating: 4.9,
        contact: '(214) 555-4044',
        website: 'www.steakhouse101.com',
      },
      {
        name: 'The French Quarter',
        description:
          'A charming French bistro offering classic French cuisine and a fine selection of wines.',
        location: '678 Walnut Street, New Orleans, LA',
        cuisine: 'French',
        rating: 4.8,
        contact: '(504) 555-5055',
        website: 'www.thefrenchquarter.com',
      },
      {
        name: "Ocean's Delight",
        description:
          "A seafood lover's paradise offering fresh catches and a view of the ocean.",
        location: '432 Seaside Boulevard, Miami Beach, FL',
        cuisine: 'Seafood',
        rating: 4.6,
        contact: '(786) 555-6060',
        website: 'www.oceansdelight.com',
      },
      {
        name: 'The Vegan Village',
        description:
          'A popular spot for health-conscious diners, offering a wide range of organic and vegan options.',
        location: '231 Green Street, Boulder, CO',
        cuisine: 'Vegan',
        rating: 4.5,
        contact: '(303) 555-7070',
        website: 'www.theveganvillage.com',
      },
      {
        name: 'Taste of Thailand',
        description:
          'Authentic Thai restaurant known for its spicy curries and traditional street food dishes.',
        location: '987 Bamboo Lane, San Diego, CA',
        cuisine: 'Thai',
        rating: 4.4,
        contact: '(619) 555-8080',
        website: 'www.tasteofthailand.com',
      },
      {
        name: 'The Rustic Barn',
        description:
          'A farm-to-table restaurant with a cozy atmosphere, offering seasonal dishes made from local ingredients.',
        location: '456 Country Road, Asheville, NC',
        cuisine: 'American',
        rating: 4.7,
        contact: '(828) 555-9090',
        website: 'www.therusticbarn.com',
      },
      {
        name: 'El Camino Cantina',
        description:
          'A vibrant Tex-Mex restaurant with a lively atmosphere, serving tacos, enchiladas, and margaritas.',
        location: '321 Fiesta Avenue, Phoenix, AZ',
        cuisine: 'Tex-Mex',
        rating: 4.3,
        contact: '(602) 555-1111',
        website: 'www.elcaminocantina.com',
      },
      {
        name: 'Café Parisien',
        description:
          'A chic café with a French flair, offering pastries, coffee, and light meals.',
        location: '654 Patisserie Street, Boston, MA',
        cuisine: 'French Café',
        rating: 4.8,
        contact: '(617) 555-2222',
        website: 'www.cafeparisien.com',
      },
      {
        name: 'Urban Eats',
        description:
          'A trendy spot for modern American cuisine, featuring a seasonal menu and craft cocktails.',
        location: '987 Market Street, San Francisco, CA',
        cuisine: 'Modern American',
        rating: 4.6,
        contact: '(415) 555-3333',
        website: 'www.urbaneats.com',
      },
      {
        name: 'Tokyo Ramen House',
        description:
          'A cozy ramen shop serving traditional Japanese noodles with a variety of broths and toppings.',
        location: '321 Sakura Lane, Seattle, WA',
        cuisine: 'Japanese',
        rating: 4.5,
        contact: '(206) 555-4444',
        website: 'www.tokyoramenhouse.com',
      },
      {
        name: 'Mediterraneo',
        description:
          'A family-run restaurant offering a taste of the Mediterranean with dishes from Italy, Greece, and Spain.',
        location: '123 Olive Drive, Los Angeles, CA',
        cuisine: 'Mediterranean',
        rating: 4.7,
        contact: '(213) 555-5555',
        website: 'www.mediterraneo.com',
      },
      {
        name: 'The Pancake House',
        description:
          'A cozy breakfast and brunch spot known for its fluffy pancakes and hearty breakfasts.',
        location: '456 Maple Avenue, Portland, OR',
        cuisine: 'Breakfast & Brunch',
        rating: 4.4,
        contact: '(503) 555-6666',
        website: 'www.thepancakehouse.com',
      },
    ];

    // Setting rowData and ColumnDefs for AgGrid
    this.rowData = restaurants;
    this.columnDefs = [
      {
        headerName: 'Action',
        field: 'action',
        cellRenderer: this.actionCellRenderer.bind(this),
        editable: false,
      },
      {
        headerName: 'Restraurant',
        field: 'name',
        sortable: true, // Enables sorting
        filter: true, // Enables filtering
        cellStyle: { color: '#26be48', fontWeight: 'bold' },
      },
      {
        headerName: 'Description',
        field: 'description',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Location',
        field: 'location',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Cuisine',
        field: 'cuisine',
        sortable: true,
        filter: true,
        width: 150,
      },
      {
        headerName: 'Rating',
        field: 'rating',
        sortable: true,
        filter: true,
        width: 100,
      },
      {
        headerName: 'Contact',
        field: 'contact',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Website',
        field: 'website',
        sortable: true,
        filter: true,
        cellRenderer: (params) => {
          return `<a href="${params.value}" target="_blank">${params.value}</a>`;
        },
      },
    ];

    // Grid options
    this.gridOptions = {
      onGridReady: (params) => this.onGridReady(params),
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      suppressClickEdit: true,
      rowHeight: 50,
      pagination: true, // Enable pagination
      paginationPageSize: 10,
      onCellClicked(params) {
        // Handle click event for action cells
        if (
          params.column.colId === 'action' &&
          params.event.target.dataset.action
        ) {
          let action = params.event.target.dataset.action;

          if (action === 'edit') {
            params.api.startEditingCell({
              rowIndex: params.node.rowIndex,
              // gets the first columnKey
              colKey: params.columnApi.getDisplayedCenterColumns()[0].colId,
            });
          }

          if (action === 'delete') {
            params.api.applyTransaction({
              remove: [params.node.data],
            });
          }

          if (action === 'update') {
            params.api.stopEditing(false);
          }

          if (action === 'cancel') {
            params.api.stopEditing(true);
          }
        }
      },

      onRowEditingStarted: (params) => {
        params.api.refreshCells({
          columns: ['action'],
          rowNodes: [params.node],
          force: true,
        });
      },
      onRowEditingStopped: (params) => {
        params.api.refreshCells({
          columns: ['action'],
          rowNodes: [params.node],
          force: true,
        });
      },
      editType: 'fullRow',
      rowSelection: 'multiple', // Enables row selection
      defaultColDef: {
        sortable: true, // Enables sorting by default for all columns
        filter: true, // Enables filtering by default for all columns
        editable: true, // Enables editing
      },
    };
  }

  onGridReady(params: any) {
    this.params = params;
    this.gridApi = params.api;
  }
  public actionCellRenderer(params) {
    let eGui = document.createElement('div');

    let editingCells = params.api.getEditingCells();
    // checks if the rowIndex matches in at least one of the editing cells
    let isCurrentRowEditing = editingCells.some((cell) => {
      return cell.rowIndex === params.node.rowIndex;
    });

    if (isCurrentRowEditing) {
      let primaryAction = 'Update';
      let secAction = 'cancel';
      if (this.isAdd) {
        primaryAction = 'Save';
        secAction = 'delete';
      }
      eGui.innerHTML = `
          <button  
            class="btn btn-link p-1"
            data-action="update">
                 ${primaryAction}  
          </button>
          <button  
            class="btn btn-link p-1"
            data-action=${secAction}>
                 Cancel
          </button>
          `;
    } else {
      eGui.innerHTML = `
          <button 
            class="btn btn-link p-1"  
            data-action="edit">
               Edit 
            </button>
          <button 
            class="btn btn-link p-1"
            data-action="delete">
               Delete
          </button>
          `;
    }

    return eGui;
  }

  public onAddNewRow() {
    this.isAdd = true;

    // Create an empty row object. Adjust the structure based on your grid's data structure.
    const emptyRow = {
      name: '',
      description: '',
      location: '',
      cuisine: '',
      rating: 0,
      contact: '',
      website: '',
    };

    if (JSON.stringify(emptyRow) === JSON.stringify(this.rowData[0])) {
      this.gridApi.setRowData(this.rowData);
      // Focus on the newly added row and start editing the first editable cell
      setTimeout(() => {
        const firstRowNode = this.gridApi.getRowNode('0'); // Row index '0' refers to the first row

        if (firstRowNode) {
          // Ensure the grid's row is visible
          this.gridApi.ensureIndexVisible(0);
          // Start editing the first cell
          this.gridApi.startEditingCell({
            rowIndex: 0,
            colKey: 'action', // Key of the column to start editing. Adjust as needed.
          });
        }
      }, 0);
      return;
    }
    // Add the empty row to the beginning of the rowData array
    this.rowData.unshift(emptyRow);

    // Update the grid's row data to refresh the view
    this.gridApi.setRowData(this.rowData);

    // Focus on the newly added row and start editing the first editable cell
    setTimeout(() => {
      const firstRowNode = this.gridApi.getRowNode('0'); // Row index '0' refers to the first row

      if (firstRowNode) {
        // Ensure the grid's row is visible
        this.gridApi.ensureIndexVisible(0);
        // Start editing the first cell
        this.gridApi.startEditingCell({
          rowIndex: 0,
          colKey: 'action', // Key of the column to start editing. Adjust as needed.
        });
      }
    }, 0); // Timeout ensures the row is added before trying to focus on it
  }
}
