import java.util.ArrayList;
import java.util.Scanner;

/**
 * Velaris PetCare - Sistema simples de cadastro de serviços pet (console).
 * Complemento acadêmico para a disciplina de Algoritmos e Programação.
 */
public class VelarisPetCare {

    private static final ArrayList<String> servicos = new ArrayList<>();
    private static final Scanner leitor = new Scanner(System.in);

    public static void main(String[] args) {
        exibirBoasVindas();
        executarMenu();
        leitor.close();
    }

    private static void exibirBoasVindas() {
        System.out.println("========================================");
        System.out.println("       VELARIS PETCARE - CONSOLE        ");
        System.out.println("  Cadastro de serviços pet em Goiânia   ");
        System.out.println("========================================");
        System.out.println();
    }

    private static void executarMenu() {
        boolean continuar = true;

        while (continuar) {
            exibirOpcoes();
            int opcao = lerOpcao();

            switch (opcao) {
                case 1:
                    cadastrarServico();
                    break;
                case 2:
                    listarServicos();
                    break;
                case 3:
                    buscarServicoPorNome();
                    break;
                case 4:
                    continuar = false;
                    System.out.println("\nEncerrando o Velaris PetCare. Até logo!");
                    break;
                default:
                    System.out.println("\nOpção inválida. Digite um número entre 1 e 4.");
                    break;
            }

            if (continuar) {
                System.out.println();
            }
        }
    }

    private static void exibirOpcoes() {
        System.out.println("--- MENU ---");
        System.out.println("1 - Cadastrar serviço pet");
        System.out.println("2 - Listar serviços cadastrados");
        System.out.println("3 - Buscar serviço pelo nome");
        System.out.println("4 - Sair");
        System.out.print("Escolha uma opção: ");
    }

    private static int lerOpcao() {
        if (leitor.hasNextInt()) {
            return leitor.nextInt();
        }

        leitor.nextLine();
        return -1;
    }

    private static void cadastrarServico() {
        leitor.nextLine();

        System.out.print("\nNome do serviço: ");
        String nome = leitor.nextLine().trim();

        if (nome.isEmpty()) {
            System.out.println("Erro: o nome não pode ficar vazio.");
            return;
        }

        System.out.print("Categoria (ex: Banho e Tosa, Clínica): ");
        String categoria = leitor.nextLine().trim();

        System.out.print("Bairro: ");
        String bairro = leitor.nextLine().trim();

        String registro = formatarServico(nome, categoria, bairro);
        servicos.add(registro);

        System.out.println("\nServiço cadastrado com sucesso!");
    }

    private static String formatarServico(String nome, String categoria, String bairro) {
        if (categoria.isEmpty()) {
            categoria = "Não informada";
        }
        if (bairro.isEmpty()) {
            bairro = "Não informado";
        }
        return nome + " | " + categoria + " | " + bairro;
    }

    private static void listarServicos() {
        System.out.println("\n--- SERVIÇOS CADASTRADOS ---");

        if (servicos.isEmpty()) {
            System.out.println("Nenhum serviço cadastrado ainda.");
            return;
        }

        for (int i = 0; i < servicos.size(); i++) {
            System.out.println((i + 1) + ". " + servicos.get(i));
        }

        System.out.println("\nTotal: " + servicos.size() + " serviço(s).");
    }

    private static void buscarServicoPorNome() {
        leitor.nextLine();

        System.out.print("\nDigite o nome (ou parte dele) para buscar: ");
        String termo = leitor.nextLine().trim().toLowerCase();

        if (termo.isEmpty()) {
            System.out.println("Erro: informe um termo de busca.");
            return;
        }

        ArrayList<String> encontrados = new ArrayList<>();

        for (String servico : servicos) {
            if (servico.toLowerCase().contains(termo)) {
                encontrados.add(servico);
            }
        }

        if (encontrados.isEmpty()) {
            System.out.println("Nenhum serviço encontrado para: \"" + termo + "\"");
        } else {
            System.out.println("\nResultado(s) encontrado(s):");
            for (int i = 0; i < encontrados.size(); i++) {
                System.out.println((i + 1) + ". " + encontrados.get(i));
            }
        }
    }
}
