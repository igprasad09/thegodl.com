const programs = {
    'data-structures': [
        {
            name: "Program 1: Write a program to sort a list of N element using selection sort technique.",
            code: `package demo1;
import java.util.Scanner;
public class selectionsort {
public static void main(String[] args) {
int n;
int a[];
a = new int[20];
Scanner sc = new Scanner(System.in);
System.out.println("Enter the array size:");
n = sc.nextInt();
System.out.println("Enter the element");
for (int i = 0; i < n; i++) {
a[i] = sc.nextInt();
}
for (int i = 0; i <= n - 1; i++) {
int min = i;
for (int j = i + 1; j <= n - 1; j++) {
if (a[j] < a[min])
min = j;
}
int temp = a[i];
a[i] = a[min];
a[min] = temp;
}
System.out.println("The sorted array:");
for (int i = 0; i <= n - 1; i++) {
System.out.println(a[i] + " ");
}
}
}
`},{
     name:"Program 2: Write a program to perfrom travelling salesmen problem.",
     code:`package demo1;
import java.util.Scanner;
public class TSP {
public static void main(String[] args) {
Scanner scan = new Scanner(System.in);
int c[][] = new int[10][10];
int tour[] = new int[10];
int i, j, cost;
System.out.println("Enter number of cities:");
int n = scan.nextInt();
if (n == 10) {
System.out.println("path is not possible:");
System.exit(0);
}
System.out.println("Enter the Cost Matrix:");
for (i = 1; i <= n; i++)
for (j = 1; j <= n; j++)
c[i][j] = scan.nextInt();
for (i = 1; i <= n; i++)
tour[i] = i;
cost = tspdp(c, tour, 1, n);
System.out.println("The optimal tour is:");
for (i = 1; i <= n; i++)
System.out.print(tour[i] + "->");
System.out.println("1");
System.out.println("Minimum cost:" + cost);
}
static int tspdp(int c[][], int tour[], int start, int n) {
int mintour[] = new int[10];
int temp[] = new int[10], mincost = 999, cost = 0, i, j, k;
if (start == n - 1) {
return (c[tour[n - 1]][tour[n]] + c[tour[n]][1]);
}
for (i = start + 1; i <= n; i++) {
for (j = 1; j <= n; j++)
temp[j] = tour[j];
temp[start + 1] = tour[i];
temp[i] = tour[start + 1];
if ((c[tour[start]][tour[i]] + (cost = tspdp(c, temp, start + 1, n))) < mincost) {
mincost = c[tour[start]][tour[i]] + cost;
for (k = 1; k <= n; k++)
mintour[k] = temp[k];
}}
for (i = 1; i <= n; i++)
tour[i] = mintour[i];
return mincost;
}
}
`
},{
    name:"Program 3: Write a program to perform knapsack problem using greedy solution.",
    code:`package demo1;
import java.util.Scanner;
class Knapsack {
int n;
double c;
double p[];
double w[];
public Knapsack(int n2, double c2, double[] p2, double[] w2) {
this.n = n2;
this.c = c2;
this.p = p2;
this.w = w2;
}
public void compute() {
int i;
double[] x = new double[n + 1];
for (i = 0; i < n; i++) {
x[i] = 0.0;
}
double rc = c;
for (i = 0; i < n; i++) {
if (w[i] > rc)
break;
x[i] = 1;
rc = rc - w[i];
}
if (i < n)
x[i] = rc / w[i];
double netprofit = 0.0;
for (i = 0; i < n; i++) {
if (x[i] > 0.0) {
netprofit = netprofit + x[i] * p[i];
}
}
System.out.println("netprofit:" + netprofit);
System.out.println("the object picked up into knap are:");
for (i = 0; i < n; i++) {
System.out.println(x[i] + "");
}
}
}
public class Kpgreedy {
public static void main(String[] args) {
int n;
double c;
Scanner scan = new Scanner(System.in);
System.out.println("Enter number of object");
n = scan.nextInt();
double[] p = new double[n + 1];
double[] w = new double[n + 1];
int i;
System.out.println("Enter a capacity");
c = scan.nextDouble();
System.out.println("Enter profit for each " + n + " objects");
for (i = 0; i < n; i++)
p[i] = scan.nextDouble();
System.out.println("Enter weight for each " + n + " objects");
for (i = 0; i < n; i++)
w[i] = scan.nextDouble();
Knapsack gk = new Knapsack(n, c, p, w);
gk.compute();
}
}
`
},{
    name:"Program 4: Write a program to implement the DFS(Depth First Search) algorithm for a graph.",
    code:`package demo1;

import java.util.LinkedList;
import java.util.Scanner;
import java.util.Stack;

public class Graph_implement {
    private LinkedList<Integer> adjacency[];

    public Graph_implement(int v) {
        adjacency = new LinkedList[v];
        for (int i = 0; i < v; i++) {
            adjacency[i] = new LinkedList<Integer>();
        }
    }

    public void insertedge(int s, int d) {
        adjacency[s].add(d);
        adjacency[d].add(s);
    }

    public void dfs(int source) {
        boolean visited_nodes[] = new boolean[adjacency.length];
        int parent_nodes[] = new int[adjacency.length];
        Stack<Integer> stack = new Stack<>();

        stack.add(source);
        visited_nodes[source] = true;
        parent_nodes[source] = -1;

        while (!stack.isEmpty()) {
            int p = stack.pop();
            System.out.println(p);

            for (int i : adjacency[p]) {
                if (!visited_nodes[i]) {
                    visited_nodes[i] = true;
                    stack.add(i);
                    parent_nodes[i] = p;
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of vertices and number of edges:");
        int v = sc.nextInt();
        int e = sc.nextInt();

        Graph_implement g = new Graph_implement(v);

        System.out.println("Enter edges (as pairs of vertices):");
        for (int i = 0; i < e; i++) {
            int s = sc.nextInt();
            int d = sc.nextInt();
            g.insertedge(s, d);
        }

        System.out.println("Enter source for DFS traversal:");
        int source = sc.nextInt();
        System.out.println("DFS traversal is:");
        g.dfs(source);

        sc.close();
    }
}
`
},{
    name:"Program 5: Write a program to implement the BFS(Breadth First Search algorithm for a graph.",
    code:`package demo1;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Graph {
    private LinkedList<Integer> adjacency[];

    public Graph(int v) {
        adjacency = new LinkedList[v];
        for (int i = 0; i < v; i++) {
            adjacency[i] = new LinkedList<Integer>();
        }
    }

    public void insertedge(int s, int d) {
        adjacency[s].add(d);
        adjacency[d].add(s);
    }

    public void Bfs(int source) {
        boolean visited_nodes[] = new boolean[adjacency.length];
        int parent_nodes[] = new int[adjacency.length];
        Queue<Integer> q = new LinkedList<>();

        q.add(source);
        visited_nodes[source] = true;
        parent_nodes[source] = -1;

        while (!q.isEmpty()) {
            int p = q.poll();
            System.out.println(p);

            for (int i : adjacency[p]) {
                if (!visited_nodes[i]) {
                    visited_nodes[i] = true;
                    q.add(i);
                    parent_nodes[i] = p;
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter number of vertices and number of edges:");
        int v = scan.nextInt();
        int e = scan.nextInt();

        Graph g = new Graph(v);

        System.out.println("Enter edges as pairs of vertices:");
        for (int i = 0; i < e; i++) {
            int s = scan.nextInt();
            int d = scan.nextInt();
            g.insertedge(s, d);
        }

        System.out.println("Enter source for BFS traversal:");
        int source = scan.nextInt();
        System.out.println("BFS traversal is:");
        g.Bfs(source);

        scan.close();
    }
}
`
},{
    name:"Program 6: Program to find maximum and minimum value in a array using divide and conquer.",
    code:`package demo1;

import java.util.Scanner;

public class maxMin {
    static int max, min;
    static int size;
    static int a[];
    static Scanner sc = new Scanner(System.in);

    static void maxMin(int i, int j) {
        int max1, min1, mid;
        if (i == j) {
            max = min = a[i];
        } else if (i == j - 1) {
            if (a[i] < a[j]) {
                max = a[j];
                min = a[i];
            } else {
                max = a[i];
                min = a[j];
            }
        } else {
            mid = (i + j) / 2;
            maxMin(i, mid);
            max1 = max;
            min1 = min;
            maxMin(mid + 1, j);
            if (max < max1)
                max = max1;
            if (min > min1)
                min = min1;
        }
    }

    public static void input() {
        for (int i = 0; i < size; i++) {
            a[i] = sc.nextInt();
        }
    }

    public static void main(String[] args) {
        System.out.println("Enter the size:");
        size = sc.nextInt();
        a = new int[size];
        System.out.println("Enter the elements:");
        input();
        maxMin(0, size - 1);
        System.out.println("Maximum value: " + max);
        System.out.println("Minimum value: " + min);
    }
}
`
},{
    name:"Program 7: Write a test program to implement divide and conquer strategy for quick sort algorithm.",
    code:`package demo1;

import java.util.Scanner;

public class Quicksort {

    public int partition(int[] a, int low, int high) {
        int pivot = a[low];
        int i = low;
        int j = high;
        int temp;

        while (i < j) {
            while (i <= high && a[i] <= pivot) {
                i++;
            }
            while (a[j] > pivot) {
                j--;
            }
            if (i < j) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
        // Swap pivot with a[j]
        temp = a[low];
        a[low] = a[j];
        a[j] = temp;

        return j;
    }

    public void sort(int[] a, int low, int high) {
        if (low < high) {
            int s = partition(a, low, high);
            sort(a, low, s - 1);
            sort(a, s + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] a;
        int i;
        Scanner scan = new Scanner(System.in);

        System.out.println("Enter the array size for quicksort:");
        int n = scan.nextInt();
        a = new int[n];

        System.out.println("Enter array elements:");
        for (i = 0; i < a.length; i++) {
            a[i] = scan.nextInt();
        }

        System.out.println("Array elements are:");
        for (i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();

        Quicksort m = new Quicksort();
        m.sort(a, 0, n - 1);

        System.out.println("Array elements after sorting are:");
        for (i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();

        scan.close();
    }
}
`
},{
    name:"Program 8: Write a program to implement merge sort algorithm for sorting a list of integer in ascending order.",
    code:`package demo;

import java.util.Scanner;

public class MergeSort {

    public static void main(String[] args) {
        int a[];
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the size for merge sort:");
        int n = scan.nextInt();
        a = new int[n];

        System.out.println("Enter array elements:");
        for (int i = 0; i < n; i++)
            a[i] = scan.nextInt();

        msortdiv(a, 0, n - 1);

        System.out.println("Sorted array is:");
        for (int i = 0; i < n; i++)
            System.out.print(a[i] + " ");
        System.out.println();

        scan.close();
    }

    public static void msortdiv(int a[], int low, int high) {
        int mid;
        if (low < high) {
            mid = (low + high) / 2;
            msortdiv(a, low, mid);
            msortdiv(a, mid + 1, high);
            mergesort(a, low, mid, high);
        }
    }

    public static void mergesort(int a[], int low, int mid, int high) {
        int i, j, k;
        int b[] = new int[a.length]; // dynamic size

        i = low;
        j = mid + 1;
        k = low;

        while (i <= mid && j <= high) {
            if (a[i] <= a[j]) { // ascending order
                b[k++] = a[i++];
            } else {
                b[k++] = a[j++];
            }
        }
        while (i <= mid) {
            b[k++] = a[i++];
        }
        while (j <= high) {
            b[k++] = a[j++];
        }
        for (i = low; i <= high; i++) {
            a[i] = b[i];
        }
    }
}
`
},
         
                { name: 'knapsach', code: `` },

        { name: 'knapsach', code: `def fractional_knapsack(values, weights, capacity):
    n = len(values)
    ratio = [(values[i] / weights[i], values[i], weights[i]) for i in range(n)]
    ratio.sort(reverse=True)

    total_value = 0
    for r, v, w in ratio:
        if capacity >= w:
            total_value += v
            capacity -= w
        else:
            total_value += r * capacity
            break
    return total_value


values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50

print("Maximum value:", fractional_knapsack(values, weights, capacity))` },
        { name: 'sales man', code: `import itertools

dist = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]

n = len(dist)
cities = range(n)
min_path = None
min_cost = float('inf')

for perm in itertools.permutations(cities[1:]):
    path = (0,) + perm + (0,)
    cost = sum(dist[path[i]][path[i + 1]] for i in range(n))
    if cost < min_cost:
        min_cost = cost
        min_path = path

print("Shortest path:", min_path)
print("Minimum cost:", min_cost)` },
        
                

                {
                    "name": "IMP questions",
                    "code":"💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩\n"
                },
    ],



    'java': [
        { name: '1] else stmt & it operater on vectors of variable length.', code: `x = c(4, 5, 6)
y = c(1, 2, 3, 4)

if (length(x) == length(y)) {
    print("both vector length same")
} else {
    print("both vector are not same")
}` },
{ 
     name:'2] for loop & stop on condition to print the error message',
     code:`for (i in 1:10)  
{
    print(paste("i =", i))  
    if (i == 5)  
        stop("iteration stopped (on condition) at 5")  
}`
},{
    name:'3] factorial of a given number using recursion',
    code:`fact <- function(n) {
    if (n <= 1)
        return(1)
    else
        return(n * factorial(n - 1))
}

n <- as.numeric(readline("Enter n value: "))
print(paste("Factorial of number is:", fact(n)))`
},{
    name:'4] To find mean mode & median',
    code:`a <- c(8, 10, 4, 6, 23, 5, 9, 8, 5, 4, 8, 7, 8)

print(paste("mean of vector =", mean(a)))

print(paste("median of vector =", median(a)))

print(paste("mode of vector =", names(sort(-table(a)))[1]))`
},
    {
        name:'5] read&write a file program',
        code:`output_file_path <- "D:\\out.txt"
data <- "hello, my name is A"
paste("Written successfully", writeLines(data, output_file_path))
paste("Reading a file =", readLines("D:\\out.txt"))`
    },
    {
        name:'6] write a R-program for with any data set sentaining data set objects and employ manpulation & analysing the data',
        code:`df = data.frame(
  name = c("amiya", "roy", "aish"),
  progamming_language = c("C", "Python", "Java"),
  age = c(22, 21, 23)
)

cat("data in dataframe is:\n")
print(df)

mytbl = edit(df)
cat("manipulating dataframe using text editor in after editing")
print(mytbl)

newdf = rbind(
  df,
  data.frame(
    name = c("Pavan"),
    progamming_language = c("ost"),
    age = c(24)
  )
)

cat("after adding new row(s):\n")
print(newdf)`
    },
    {
        name:'3] test anova program',
        code:`groupA<-c(18,21,24,27,30)
groupB<-c(17,20,23,26,29)
res_ttest<-t.test(groupA,groupB)
res_ttest
`
    }
    ]
};

function showPrograms(category) {
    const programList = document.getElementById('program-list');
    const dsButton = document.getElementById('ds-button');
    const javaButton = document.getElementById('java-button');

    // Clear previous programs and reset animation
    programList.innerHTML = '';

    // Highlight the active category button
    if (category === 'data-structures') {
        dsButton.classList.add('active-category');
        javaButton.classList.remove('active-category');
    } else {
        javaButton.classList.add('active-category');
        dsButton.classList.remove('active-category');
    }

    // Add program buttons with animation
    programs[category].forEach((program, index) => {
        const programButton = document.createElement('button');
        programButton.innerText = program.name;
        programButton.className = category === 'data-structures' ? 'ds-program' : 'java-program';
        programButton.onclick = () => showCode(program.code);
        programButton.style.animationDelay = `${index * 0.1}s`;
        programList.appendChild(programButton);
    });
}

function showCode(code) {
    const leftSide = document.getElementById('left-side');
    const programCode = document.getElementById('program-code');
    const codeContent = document.getElementById('code-content');
    const backButton = document.getElementById('back-button');

    // Ensure left side is visible (only the first time)
    leftSide.classList.add('visible');

    // Reset the program-code visibility to re-trigger animation
    programCode.style.display = 'none'; // Hide it first
    void programCode.offsetHeight; // Force reflow to reset CSS
    programCode.style.display = 'block'; // Show it again

    // Update and show the code with animation
    codeContent.innerText = code;
    programCode.classList.remove('visible'); // Reset animation
    void programCode.offsetHeight; // Trigger reflow
    programCode.classList.add('visible'); // Start animation

    // Show the back button on mobile
    backButton.style.display = 'block';

}

function hideCode() {
    const leftSide = document.getElementById('left-side');
    const backButton = document.getElementById('back-button');

    // Hide the code section and back button
    leftSide.classList.remove('visible');
    backButton.style.display = 'none';
}

function copyCode() {
    const codeText = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    });
}

document.querySelector('.copy-button').addEventListener('click', function() {
    const button = this;
    button.classList.add('pulse-animation');
    
    // Remove the animation class after it completes to allow it to be retriggered
    setTimeout(function() {
        button.classList.remove('pulse-animation');
    }, 400); // Match this time with your animation duration
});

function redirecting(){
     window.location.href = "https://godlchat.netlify.app/";
}

function hover_godlai(){
    window.location.href = "https://gpt-bbx2vo6ld-prasads-projects-a9be2b04.vercel.app/"
}
