import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase();
        boolean isPangram = checkPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkPangram(String s) {
        boolean[] mark = new boolean[26];
        int index;
        int len = s.length();
        for (int i = 0; i < len; i++) {
            if ('a' <= s.charAt(i) && s.charAt(i) <= 'z') {
                index = s.charAt(i) - 'a';
                mark[index] = true;
            }
        }
        for (int i = 0; i < 26; i++) {
            if (!mark[i]) {
                return false;
            }
        }
        return true;
    }
}
